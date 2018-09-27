import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogModule,
  MatRadioModule,
  MatDividerModule,
  MatSelectModule,
  MatGridListModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule,
    MatDividerModule,
    MatSelectModule,
    MatGridListModule,
    MatTableModule
  ]
})

export class MaterialModule { }
