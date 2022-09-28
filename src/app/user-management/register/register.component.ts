import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GenderStatus } from 'src/app/Utility/enums/enum';
import { Register } from './entity/register';
import { RegisterService } from './register-service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  mobileNo: any;
  isShown: boolean = false;
  registerForm: FormGroup;
  public registerObject: Register = new Register();
  dateValue: Date = new Date();
  enumKeys: any;
  public genderStatus: GenderStatus;
  isChecked: boolean = false;
  apiStatus: boolean = true;
  obj:any;

  constructor(
    private registerService: RegisterService,
    private _routerService: Router,
    private route: ActivatedRoute,
    public toastController: ToastController
  ) {
    this.enumKeys = Object.keys(GenderStatus).filter(Number);
  }

  ngOnInit() {
    this.obj = history.state;
  }

  toggleShow() {
    this.isShown = !this.isShown;
  }

  registerUser() {
    this.registerObject.phoneNo = this.obj.mobileNo;
    this.registerService
      .registerNewUser(this.registerObject)
      .subscribe(async (response) => {
        if (response != null || response != undefined) {
          this._routerService.navigateByUrl('user/login',{ state: this.registerObject});
          const toast = await this.toastController.create({
            message: 'New User Registration Successfully',
            duration: 2000,
            position: 'bottom',
            color: 'success',
          });
          await toast.present();
        } else {
          console.log('Error');
        }
      });
  }
  onChanged(event) {
    if (event.target.value == 'Male') {
      this.registerObject.gender = GenderStatus.Male;
    } else if (event.target.value == 'Female') {
      this.registerObject.gender = GenderStatus.Female;
    } else {
      this.registerObject.gender = GenderStatus.Others;
    }
  }
}
