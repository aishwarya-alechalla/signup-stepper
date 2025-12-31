import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-about-yourself',
  standalone: true,
  imports: [IonicModule],
  template: `
    <h2>About Yourself</h2>
    <ion-input placeholder="Your name"></ion-input>
  `
})
export class AboutYourselfComponent {}

