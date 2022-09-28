import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmForgotPasswordComponent } from './confirm-forgot-password/confirm-forgot-password.component';
import { CreatePasswordComponent } from './create-password/create-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OtpInputComponent } from './otp-input/otp-input.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ReviewComponent } from './review/review.component';
import { SearchComponent } from './search/search.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';


const routes: Routes = [
  {path: 'create-password', component: CreatePasswordComponent, pathMatch: 'full'},
  {path: 'edit-profile', component: EditProfileComponent, pathMatch: 'full'},
  {path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full'},
  {path: 'confirm-forgot-password', component: ConfirmForgotPasswordComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: 'notifications', component: NotificationsComponent, pathMatch: 'full'},
  {path: 'otp-input', component: OtpInputComponent, pathMatch: 'full'},
  {path: 'qr-code', component: QrCodeComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent, pathMatch: 'full'},
  {path: 'reset-password', component: ResetPasswordComponent, pathMatch: 'full'},
  {path: 'review', component: ReviewComponent, pathMatch: 'full'},
  {path: 'search', component: SearchComponent, pathMatch: 'full'},
  {path: 'settings', component: SettingsComponent, pathMatch: 'full'},
  {path: 'sidebar', component: SidebarComponent, pathMatch: 'full'},
  {path: '', component: SplashScreenComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
