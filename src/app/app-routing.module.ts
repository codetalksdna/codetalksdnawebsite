import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{ HomeComponent } from './admin/home/home.component';



const appRoutes: Routes = [
  { path: '', redirectTo: "home", pathMatch: "full" },
  {path: 'home',component:HomeComponent},
  

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
