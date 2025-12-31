import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-welcome',
  imports: [IonicModule],
  template: `
    <h1>Welcome to Othisis!</h1>
    <p>
      Just speak, and Othisis turns your conversations into clean,
      structured notes — so you can focus on patients, not paperwork.
    </p>
  `
})
export class WelcomeComponent {}

