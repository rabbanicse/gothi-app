import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Login } from './entity/login';
import { LoginRequest } from './entity/loginRequest';
import { Otp } from './entity/otp';
import { LoginService } from './login-service/login.service';
import {Storage} from '@capacitor/storage';
import { OtpPost } from './entity/otpPost';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  phoneCheckForm: FormGroup;
  otpCheckForm: FormGroup;
  isShown: boolean = false;
  public loginObject: Login = new Login();
  public otpObject: Otp = new Otp();
  public otp: OtpPost = new OtpPost();
  apiStatus: boolean = false;
  public loginRequest: LoginRequest = new LoginRequest();
  errorMessage: string = "Phone No must be 11 digit";
  successfullMessage = "Validation successfull";
  tokenObj:any;

  constructor(
    private loginService: LoginService,
    private _routerService: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() { }

  toggleShow() {
    this.isShown = !this.isShown;
  }

  async checkPhoneNoStatus() {
    this.loginRequest.phoneNo = this.loginObject.PhoneNo;
    this.loginService
      .phoneNoCheck(this.loginObject.PhoneNo)
      .subscribe(async (response) => {
        if (response.status == true) {
          this.loginObject.status = response.status;
        } else {
          this.otpPost();
        }
      });
  }


  async login(){
    this.loginService.login(this.loginRequest).subscribe(async (response) => {
      if (response != null) {
        this.tokenObj = JSON.stringify(response);
        const toast = await this.toastController.create({
          message: 'Successfully Logged In',
          duration: 2000,
          position: 'bottom',
          color: 'success',
        });
        await toast.present();
        this._routerService.navigateByUrl('user/home', { state: this.loginObject});
        await Storage.set({key: 'PhoneNo', value: `${this.loginObject.PhoneNo}`});
        debugger
        await Storage.set({key: 'Token',  value:`${this.tokenObj}`});
        debugger
      } else {
        const toast = await this.toastController.create({
          message: 'Successfully Logged In As User',
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

  otpPost() {
    this.otp.mobileNo = this.loginObject.PhoneNo;
    this.loginService.otpPost(this.otp).subscribe(async (response) => {
      if (response != null || response != undefined) {
        const toast = await this.toastController.create({
          message: 'OTP has been sent to your phone. Please check.',
          duration: 2000,
          position: 'bottom',
          color: 'tertiary',
        });
        await toast.present();
        this._routerService.navigateByUrl('user/otp-input',{ state: {otp:response, forgotPass:false}});
      } else {
        console.log('Error');
      }
    });
    alert("validation working");
  }

  ValidateNo(phoneNo) {
    if (phoneNo.length != 12 && phoneNo.length > 10) {
      this.successfullMessage;
      return true;
    }
    else {
      this.errorMessage;
      return false;
    }
    // if (this.loginObject.PhoneNo.length < 12 || this.loginObject.PhoneNo.length > 12) {
    //   alert("Mobile No. is not valid, Please Enter 11 Digit Mobile No.");
    //   return false;
    // }


  }


}
