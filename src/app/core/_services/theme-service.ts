import { Injectable, signal } from '@angular/core';
import { Signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = signal<boolean>(false);

  constructor() {
    this.initializeDarkMode();
  }

  // Toggle dark mode
  toggleDarkMode(): void {
    this.darkMode.set(!this.darkMode());
    this.updateHtmlTagAttribute();
  }

  // Get the current dark mode state
  getDarkModeState() {
    return this.darkMode;
  }

  // Initialize the dark mode based on localStorage or system preference
  private initializeDarkMode() {
    // Check if there's a saved preference in localStorage
    const savedMode = localStorage.getItem('darkMode');
    
    if (savedMode === 'true') {
      this.darkMode.set(true);
    } else if (savedMode === 'false') {
      this.darkMode.set(false);
    } else {
      // Check the system theme preference (dark or light mode)
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkMode.set(prefersDarkMode);
    }
    this.updateHtmlTagAttribute();
  }

  // Update the data-theme attribute on the <html> tag based on the current dark mode state
  private updateHtmlTagAttribute(): void {
    const htmlTag = document.documentElement; // <html> tag
    if (this.darkMode()) {
      htmlTag.setAttribute('data-theme', 'dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      htmlTag.setAttribute('data-theme', 'light');
      localStorage.setItem('darkMode', 'false');
    }
  }
}
