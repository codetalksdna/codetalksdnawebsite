import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{} from './admin/home/home.component';
import{UpdateComponent } from './admin/update/update.component'
import { AddempComponent } from './admin/addemp/addemp.component';
import { EmpdetailsComponent } from './admin/empdetails/empdetails.component';
import { BankbranchComponent } from './admin/bankbranch/bankbranch.component';
import { RegionalofficeComponent } from './admin/regionaloffice/regionaloffice.component';
import { MasterbankComponent } from './admin/masterbank/masterbank.component';
import { EmpunitComponent } from './admin/empunit/empunit.component';
import { MasterunitComponent } from './admin/masterunit/masterunit.component';
import {NewroComponent} from './admin/newro/newro.component'
import {NewunitComponent}from './admin/newunit/newunit.component'
import { NewbankmasterComponent } from './admin/newbankmaster/newbankmaster.component';


const appRoutes: Routes = [
  { path: '', redirectTo: "empdetails", pathMatch: "full" },
  {path:'update',component:UpdateComponent},
  {path: 'empdetails',component:EmpdetailsComponent},
  {path: 'bankbranch',component:BankbranchComponent},
  {path: 'regionaloffice',component:RegionalofficeComponent},
  {path: 'masterbank',component:MasterbankComponent},
  {path: 'empunit',component:EmpunitComponent},
  {path: 'addemp',component:AddempComponent},
  {path: 'masterunit',component:MasterunitComponent},
  {path: 'newro',component:NewroComponent},
  {path:'newbankmaster',component:NewbankmasterComponent},
  {path:'newunit',component:NewunitComponent}

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
