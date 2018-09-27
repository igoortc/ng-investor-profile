import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { TermDialogComponent } from '../term-dialog/term-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})

export class WelcomeComponent {

  constructor(public dialog: MatDialog, private router: Router) { }

  openTermDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '400px';
    const dialogRef = this.dialog.open(TermDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => { });
  }

  goToQuestionnaire() {
    this.router.navigate(['/questionnaire']);
  }
}
