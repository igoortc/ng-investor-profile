import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-term-dialog',
  templateUrl: './term-dialog.component.html',
  styleUrls: ['./term-dialog.component.scss']
})

export class TermDialogComponent {

  // modalTitle: string;
  checked = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {
    // this.modalTitle = data.title;
    console.log(data)
  }

  goToSuccess() {
    this.router.navigate(['/success']);
  }
}
