import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';


import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule,
  MatTooltipModule,
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing';
import { CandidatComponent } from './candidat-profile/candidat.component';

@NgModule({
  
  declarations: [
    DashboardComponent,
    AppComponent,
    CandidatComponent,
    
    // UserProfileComponent,
    // TableListComponent,
    // TypographyComponent,
    // IconsComponent,
   
    // NotificationsComponent,
   
   
  ],
 
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
