import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherService {
  private readonly http = inject(HttpClient);
  baseUrl = 'https://api.openweathermap.org/';
  apiKey = '8b9f9555984e6d397bc8f5be700f47e6';

  getWeather(lat: number, lon: number, lang: string) {
    return this.http.get<WeatherResponse>(
      `${this.baseUrl}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`
    );
  }

  getForecast() {}

  searchLoacationByName() {}
}
