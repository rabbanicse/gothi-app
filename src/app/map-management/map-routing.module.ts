import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindingRideComponent } from './finding-ride/finding-ride.component';


const routes: Routes = [
  {path: 'finding-ride', component: FindingRideComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule {
}
