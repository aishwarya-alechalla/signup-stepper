// src/app/pages/signup/signup-shell/signup-shell.page.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-signup-shell',
  templateUrl: './signup-shell.page.html',
  styleUrls: ['./signup-shell.page.scss'],
  imports: [IonicModule, CommonModule, RouterOutlet],
})
export class SignupShellPage {
  steps = [
    { path: 'welcome', label: 'Welcome' },
    { path: 'about-yourself', label: 'About Yourself' },
    { path: 'invite-staff', label: 'Invite Staff' },
    { path: 'mic-check', label: 'Microphone Check' },
    { path: 'next-steps', label: 'Next Steps' },
  ];

  currentIndex = 0;

  constructor(private router: Router) {
    const url = this.router.url;
    const idx = this.steps.findIndex((s) => url.includes(s.path));
    this.currentIndex = idx === -1 ? 0 : idx;
  }

  next() {
    if (this.currentIndex < this.steps.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/signup', this.steps[this.currentIndex].path]);
    }
  }

  back() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/signup', this.steps[this.currentIndex].path]);
    }
  }
}