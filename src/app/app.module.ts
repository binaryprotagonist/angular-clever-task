import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DialogOverviewExampleDialog, TaskComponent } from './pages/task/task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TaskComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
