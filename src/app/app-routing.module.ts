import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './user-management/register/register.component';
import { SplashScreenComponent } from './user-management/splash-screen/splash-screen.component';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
   {path: '', component: SplashScreenComponent, pathMatch: 'full'},
  {path: 'registration', component: RegisterComponent, pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'trip',
    loadChildren: () => import('./trip-management/trip-management.module').then(m => m.TripManagementModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map-management/map-management.module').then(m => m.MapManagementModule)
  },
  {
    path: 'driver',
    loadChildren: () => import('./driver-management/driver-management.module').then(m => m.DriverManagementModule)
  }
  // {path: 'common', loadChildren: () => import('./common-module/common.module').then(m => m.CommonModule)},
  // {path: '', loadChildren: () => import('./user-management/user.module').then(m => m.UserModule)}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
