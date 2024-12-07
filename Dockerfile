FROM node:18 AS build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular application source code to the container
COPY . .

# Build the Angular application
RUN npm run build --prod

# Use a lightweight web server to serve the built Angular app
FROM nginx:alpine AS production-stage

# Copy built Angular files from the build-stage
COPY --from=build-stage /app/dist/weatherly/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
