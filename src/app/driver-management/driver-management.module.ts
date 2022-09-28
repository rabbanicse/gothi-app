import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverRoutingModule } from './driver-routing.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModuleModule } from '../common-module/common-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DriverLoginComponent } from './driver-login/driver-login.component';
import { DriverRegistrationComponent } from './driver-registration/driver-registration.component';
import { DriverMapComponent } from './driver-map/driver-map.component';

@NgModule({
  declarations: [
    DriverLoginComponent, 
    DriverRegistrationComponent,
    DriverMapComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    IonicModule,
    RouterModule,
    CommonModuleModule,
    ReactiveFormsModule,
    FormsModule
    
  ]
})
export class DriverManagementModule { }
