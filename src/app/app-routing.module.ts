import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  
  {path: 'dashboard', component: DashboardComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
