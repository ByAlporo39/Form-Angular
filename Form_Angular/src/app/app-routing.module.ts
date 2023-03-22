import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { FormComponent } from './form/form/form.component';
import { FormViewComponent } from './formView/form-view/form-view.component';
const routes: Routes = [
  {
    path: 'home', component:HomeComponent,
  },
  {
    path: 'form', component:FormComponent,
  },
  {
    path: 'formView', component:FormViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
