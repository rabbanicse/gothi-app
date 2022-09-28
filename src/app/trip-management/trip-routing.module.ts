import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationsComponent } from '../user-management/notifications/notifications.component';
import { CancelReportComponent } from './cancel-report/cancel-report.component';
import { ConfirmTripComponent } from './confirm-trip/confirm-trip.component';
import { ConfirmVehicleComponent } from './confirm-vehicle/confirm-vehicle.component';
import { FindingRideComponent } from './finding-ride/finding-ride.component';
import { RideForOthersComponent } from './ride-for-others/ride-for-others.component';
import { SwitchRideComponent } from './switch-ride/switch-ride.component';
import { TripHistoryComponent } from './trip-history/trip-history.component';
import { WhereToComponent } from './where-to/where-to.component';


const routes: Routes = [
  {path: 'confirm-trip', component: ConfirmTripComponent, pathMatch: 'full'},
  {path: 'cancel-report', component: CancelReportComponent, pathMatch: 'full'},
  {path: 'confirm-moto', component: ConfirmVehicleComponent, pathMatch: 'full'},
  {path: 'finding-ride', component: FindingRideComponent, pathMatch: 'full'},
  {path: 'ride-for-others', component: RideForOthersComponent, pathMatch: 'full'},
  {path: 'switch-ride', component: SwitchRideComponent, pathMatch: 'full'},
  {path: 'trip-history', component: TripHistoryComponent, pathMatch: 'full'},
  {path: 'where-to', component: WhereToComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule {
}
