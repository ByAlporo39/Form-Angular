import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HomeComponent } from './home/home/home.component';
import { FormComponent } from './form/form/form.component';
import { FormViewComponent } from './formView/form-view/form-view.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatStepperModule} from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { userService } from './servicios/userServices';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormComponent,
    FormViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  providers: [userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
