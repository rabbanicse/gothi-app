import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ForgotPassword } from './entity/forgot-password';
import { ForgotPasswordService } from './services/forgotPassword.service';
import { Otp } from './entity/otp';
import { OtpPost } from './entity/otpPost';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordObject:ForgotPassword = new ForgotPassword();
  public otp: OtpPost = new OtpPost();
  constructor(
    private _routerService: Router,
    public toastController: ToastController,
    public forgotPasswordService:ForgotPasswordService) { }

  ngOnInit() {}



  async forgotPassword(){
    this.forgotPasswordService.forgotPassword(this.forgotPasswordObject).subscribe(async (response) => {
      if (response != null) {
        const toast = await this.toastController.create({
          message: 'Successfully Changed Password',
          duration: 2000,
          position: 'bottom',
          color: 'success',
        });
        await toast.present();
        this._routerService.navigateByUrl('user/login');
       
      } else {
        const toast = await this.toastController.create({
          message: 'Successfully Changed Password',
          duration: 2000,
          position: 'bottom',
          color: 'success',
        });
        await toast.present();
      }
    }, async error => {
      const toast = await this.toastController.create({
        message: error.error.message,
        duration: 2000,
        position: 'bottom',
        color: 'success',
      });
      await toast.present();
    });

  }

  async checkPhoneNoStatus() {
    this.forgotPasswordService
      .phoneNoCheck(this.forgotPasswordObject.mobileNo)
      .subscribe(async (response) => {
        if (response.status == true) {
          this.otpPost();
          console.log('response status', response);
          
        } else {
          console.log('err');
          
        }
      });
  }

  otpPost() {
    this.otp.mobileNo = this.forgotPasswordObject.mobileNo;
    this.forgotPasswordService.otpPost(this.otp).subscribe(async (response) => {
      if (response != null || response != undefined) {
        const toast = await this.toastController.create({
          message: 'OTP has been sent to your phone. Please check.',
          duration: 2000,
          position: 'bottom',
          color: 'tertiary',
        });
        await toast.present();
        this._routerService.navigateByUrl('user/otp-input',{ state: {otp:response, forgotPass:true}});
      } else {
        console.log('Error');
      }
    });
    alert("validation working");
  }


}
