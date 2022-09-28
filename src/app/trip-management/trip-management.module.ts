import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ConfirmTripComponent } from './confirm-trip/confirm-trip.component';
import { ConfirmVehicleComponent } from './confirm-vehicle/confirm-vehicle.component';
import { FindingRideComponent } from './finding-ride/finding-ride.component';
import { RideForOthersComponent } from './ride-for-others/ride-for-others.component';
import { SwitchRideComponent } from './switch-ride/switch-ride.component';
import { TripHistoryComponent } from './trip-history/trip-history.component';
import { WhereToComponent } from './where-to/where-to.component';
import { TripRoutingModule } from './trip-routing.module';




@NgModule({
  declarations: [
    ConfirmTripComponent,
ConfirmVehicleComponent,
FindingRideComponent,
RideForOthersComponent,
SwitchRideComponent,
TripHistoryComponent,
WhereToComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    IonicModule
    
  ],
  exports:[
    ConfirmTripComponent
  ]
})
export class TripManagementModule { }
