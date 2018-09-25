import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-term-dialog',
  templateUrl: './term-dialog.component.html',
  styleUrls: ['./term-dialog.component.scss']
})

export class TermDialogComponent {

  // modalTitle: string;
  checked = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    // this.modalTitle = data.title;
    console.log(data)
  }
}
