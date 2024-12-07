import { Component, inject } from '@angular/core';
import { ThemeService } from './core/_services/theme-service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  themeService = inject(ThemeService);
  darkMode$ = this.themeService.getDarkModeState();
  toggleDarkMode(): void {
    this.themeService.toggleDarkMode();
  }
}
