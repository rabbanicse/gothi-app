import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FindingRideComponent } from './finding-ride/finding-ride.component';
import { MapRoutingModule } from './map-routing.module';




@NgModule({
  declarations: [
  FindingRideComponent,
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    IonicModule
    
  ]
})
export class MapManagementModule { }
