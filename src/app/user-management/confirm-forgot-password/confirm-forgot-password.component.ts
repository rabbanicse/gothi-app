import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ForgotPassword } from '../forgot-password/entity/forgot-password';
import { ForgotPasswordService } from '../forgot-password/services/forgotPassword.service';

@Component({
  selector: 'app-confirm-forgot-password',
  templateUrl: './confirm-forgot-password.component.html',
  styleUrls: ['./confirm-forgot-passwordcomponent.scss'],
})
export class ConfirmForgotPasswordComponent implements OnInit {
  forgotPasswordObject:ForgotPassword = new ForgotPassword();

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

}
