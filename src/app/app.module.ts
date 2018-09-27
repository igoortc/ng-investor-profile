import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { WelcomeComponent } from './welcome/welcome.component';
import { TermDialogComponent } from './term-dialog/term-dialog.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { SuccessComponent } from './success/success.component';
import { DynamicFormComponent }         from './questionnaire/dynamic-form.component';
import { DynamicFormQuestionComponent } from './questionnaire/dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TermDialogComponent,
    QuestionnaireComponent,
    SuccessComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpModule
  ],
  entryComponents: [
    TermDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
