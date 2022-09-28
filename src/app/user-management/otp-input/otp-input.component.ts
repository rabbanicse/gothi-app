import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Login } from '../login/entity/login';
import { Otp } from '../login/entity/otp';
import { LoginService } from '../login/login-service/login.service';

@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
})
export class OtpInputComponent implements OnInit {
  obj: any;
  forgotPass:any;
  public loginObject: Login = new Login();
  public otpObject: Otp = new Otp();
  numbers = new Array(6);
  constructor(
    private route: ActivatedRoute,
    private loginService: LoginService,
    private _routerService: Router,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.obj = history.state.otp
    this.forgotPass = history.state.forgotPass;
    debugger;
    this.numbers = this.obj.otp.split('');
    console.log('split otp', this.numbers);
  }

  otpChcek() {
    this.loginService
      .phoneNoCheck(this.obj.mobileNo)
      .subscribe(async (response) => {
        if (response.status == false) {
          const toast = await this.toastController.create({
            message: 'Please fill up the following info',
            duration: 2000,
            position: 'bottom',
            color: 'tertiary',
          });
          await toast.present();
          this._routerService.navigateByUrl('registration',{ state: this.obj});
        } else {
          console.log('Error');
        }
      });
  }

  otpForgotPasswordCheck() {
    this.loginService
      .phoneNoCheck(this.obj.mobileNo)
      .subscribe(async (response) => {
        if (response.status == true) {
          const toast = await this.toastController.create({
            message: 'Please fill up the following info',
            duration: 2000,
            position: 'bottom',
            color: 'tertiary',
          });
          await toast.present();
          this._routerService.navigateByUrl('user/confirm-forgot-password',{ state: this.obj});
        } else {
          console.log('Error');
        }
      });
  }

  public trackByIndex(index) {
    return index;
  }
}
