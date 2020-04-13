import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{} from './admin/home/home.component';
import{ DatatablesComponent} from './admin/datatables/datatables.component'
import{UpdateComponent } from './admin/update/update.component'


const appRoutes: Routes = [
  { path: '', redirectTo: "datatables", pathMatch: "full" },
  {path: 'datatables',component:DatatablesComponent},
  {path: 'update',component:UpdateComponent}

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
