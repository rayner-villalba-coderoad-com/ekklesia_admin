import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {
  modalTitle: string;
  modalContent: string;
  modalNegativeButton: string;
  modalPositiveButton: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalContent = data.content;
    this.modalNegativeButton = data.negativeButton || 'No';
    this.modalPositiveButton = data.positiveButton || 'Si';
  }
}
