import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{} from './admin/home/home.component';
import { EmpdetailsComponent } from './admin/empdetails/empdetails.component';
import { BankbranchComponent } from './admin/bankbranch/bankbranch.component';
import { RegionalofficeComponent } from './admin/regionaloffice/regionaloffice.component';
import { MasterbankComponent } from './admin/masterbank/masterbank.component';
import { EmpunitComponent } from './admin/empunit/empunit.component';
import { MasterunitComponent } from './admin/masterunit/masterunit.component';


const appRoutes: Routes = [
  { path: '', redirectTo: "empdetails", pathMatch: "full" },
  {path: 'empdetails',component:EmpdetailsComponent},
  {path: 'bankbranch',component:BankbranchComponent},
  {path: 'regionaloffice',component:RegionalofficeComponent},
  {path: 'masterbank',component:MasterbankComponent},
  {path: 'empunit',component:EmpunitComponent},
  {path: 'masterunit',component:MasterunitComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
