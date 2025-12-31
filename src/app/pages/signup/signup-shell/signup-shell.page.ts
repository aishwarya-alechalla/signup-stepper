import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signup-shell',
  standalone: true,
  templateUrl: './signup-shell.page.html',
  styleUrls: ['./signup-shell.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class SignupShellPage {

  steps = [
    { label: 'Welcome', route: 'welcome' },
    { label: 'About Yourself', route: 'about-yourself' },
    { label: 'Invite Staff', route: 'invite-staff' },
    { label: 'Microphone Check', route: 'mic-check' },
    { label: 'Next Steps', route: 'next-steps' }
  ];

  constructor(public router: Router) {}

  get currentStepIndex(): number {
    const url = this.router.url;
    return this.steps.findIndex(s => url.includes(s.route));
  }

  next() {
    const i = this.currentStepIndex;
    if (i < this.steps.length - 1) {
      this.router.navigate(['/signup', this.steps[i + 1].route]);
    }
  }

  back() {
    const i = this.currentStepIndex;
    if (i > 0) {
      this.router.navigate(['/signup', this.steps[i - 1].route]);
    }
  }
}
