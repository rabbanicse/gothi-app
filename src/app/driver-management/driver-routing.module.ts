import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriverLoginComponent } from './driver-login/driver-login.component';
import { DriverMapComponent } from './driver-map/driver-map.component';
import { DriverOTPComponent } from './driver-otp/driver-otp.component';
import { DriverRegistrationComponent } from './driver-registration/driver-registration.component';


const routes: Routes = [
  {path: 'driver-login', component: DriverLoginComponent, pathMatch: 'full'},
  {path: 'driver-register', component: DriverRegistrationComponent, pathMatch: 'full'},
  {path: 'driver-map', component: DriverMapComponent, pathMatch: 'full'},
  {path: 'driver-otp', component: DriverOTPComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule {
}
