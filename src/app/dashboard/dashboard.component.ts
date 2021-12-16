import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  SocialUser,
  GoogleLoginProvider,
  SocialAuthService,
} from 'angularx-social-login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  reactiveForm!: FormGroup;
  user!: SocialUser;
  isSignedin!: boolean;

  constructor(
    private fb: FormBuilder,
    private socialAuthService: SocialAuthService
  ) {}

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = user != null;
      console.log(this.user);
    });
  }

  googleSignin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout(): void {
    this.socialAuthService.signOut();
  }
}
