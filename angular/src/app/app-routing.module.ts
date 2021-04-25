import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IcecreamsComponent} from "./icecreams/icecreams.component";
import {DetailComponent} from "./icecreams/detail/detail.component";

const routes: Routes = [
  { path: '',   redirectTo: '/icecreams', pathMatch: 'full' },
  { path: 'icecreams', component: IcecreamsComponent },
  { path: 'icecream-details/:id', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
