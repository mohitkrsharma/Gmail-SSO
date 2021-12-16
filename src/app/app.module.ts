import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '292117024036-3bd7loqudbccrvtk5t0thcdgnik48d5t.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
