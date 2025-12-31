import { Routes } from '@angular/router';
import { SignupShellPage } from './pages/signup/signup-shell/signup-shell.page';

export const routes: Routes = [

  {
    path: 'signup',
    component: SignupShellPage,
    children: [
      {
        path: 'welcome',
        loadComponent: () =>
          import('./pages/signup/steps/welcome/welcome.component')
            .then(m => m.WelcomeComponent)
      },
      {
        path: 'about-yourself',
        loadComponent: () =>
          import('./pages/signup/steps/about-yourself/about-yourself.component')
            .then(m => m.AboutYourselfComponent)
      },
      {
        path: 'invite-staff',
        loadComponent: () =>
          import('./pages/signup/steps/invite-staff/invite-staff.component')
            .then(m => m.InviteStaffComponent)
      },
      {
        path: 'mic-check',
        loadComponent: () =>
          import('./pages/signup/steps/mic-check/mic-check.component')
            .then(m => m.MicCheckComponent)
      },
      {
        path: 'next-steps',
        loadComponent: () =>
          import('./pages/signup/steps/next-steps/next-steps.component')
            .then(m => m.NextStepsComponent)
      },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      }
    ]
  },

  { path: '', redirectTo: 'signup', pathMatch: 'full' }
];
