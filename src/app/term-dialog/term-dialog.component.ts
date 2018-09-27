import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-term-dialog',
  templateUrl: './term-dialog.component.html',
  styleUrls: ['./term-dialog.component.scss']
})

export class TermDialogComponent {

  checked = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  goToSuccess() {
    this.router.navigate(['/success']);
  }
}
