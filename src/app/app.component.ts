import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule,AuthenticatorService } from '@aws-amplify/ui-angular';
import awsExports from '../aws-exports'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AmplifyAuthenticatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'profootballrant';

  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }
}
