import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OtpInputComponent } from './otp-input/otp-input.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReviewComponent } from './review/review.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { UserRoutingModule } from './user-routing.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModuleModule } from '../common-module/common-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripManagementModule } from '../trip-management/trip-management.module';
import { ConfirmForgotPasswordComponent } from './confirm-forgot-password/confirm-forgot-password.component';






@NgModule({
  declarations: [
    CreatePasswordComponent, 
    EditProfileComponent,
    ForgotPasswordComponent,
    HomeComponent,
    LoginComponent,
    NotificationsComponent,
    OtpInputComponent,
    QrCodeComponent,
    ResetPasswordComponent,
    ReviewComponent,
    SearchComponent,
    SettingsComponent,
    SidebarComponent,
    SplashScreenComponent,
    ConfirmForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    IonicModule,
    RouterModule,
    CommonModuleModule,
    ReactiveFormsModule,
    FormsModule,
    TripManagementModule
    
  ]
})
export class UserManagementModule { }
