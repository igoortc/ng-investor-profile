import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { WelcomeComponent } from './welcome/welcome.component';
import { TermDialogComponent } from './term-dialog/term-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TermDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [
    TermDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
