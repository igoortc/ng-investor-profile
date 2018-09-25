import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TermDialogComponent } from '../term-dialog/term-dialog.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent {

  constructor(public dialog: MatDialog) { }

  openTermDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '400px';
    const dialogRef = this.dialog.open(TermDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
    });
  }
}
