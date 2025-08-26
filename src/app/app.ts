import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { ButtonDemo } from "./components/demos/button-demo/button-demo";
import { Header } from "./header/header";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    MatSlideToggleModule,
    Header,
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  showSidenav = false;
  isDarkMode = false;
  constructor(private readonly router: Router) {
    // Check if user previously selected dark mode
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.updateTheme();
  }
  
  get currentRoute() {
    return this.router.url.split('?')[0];
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  private updateTheme() {
    const body = document.querySelector('body');
    if (body) {
      if (this.isDarkMode) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
    }
  }

  navigationItems = [
    { name: 'Button', route: '/button', icon: 'smart_button' },
    { name: 'Card', route: '/card', icon: 'view_agenda' },
    { name: 'Chips', route: '/chips', icon: 'data_check' },
    { name: 'Dialog', route: '/dialog', icon: 'open_in_new' },
    { name: 'Menu', route: '/menu', icon: 'menu' },
    { name: 'Botstudio', route: '/botstudio', icon: 'smart_toy' },
    { name: 'Inputs', route: '/inputs', icon: 'input' },
    { name: 'Slider', route: '/slider', icon: 'sliders' }


  ];

  toggleSidenav() {
    this.showSidenav = !this.showSidenav;
  }
}
