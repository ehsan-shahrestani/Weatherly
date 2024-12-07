FROM node:18 as build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod


FROM nginx:latest
EXPOSE 80
COPY --from=build  app/dist/weatherly/browser /usr/share/nginx/html
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf