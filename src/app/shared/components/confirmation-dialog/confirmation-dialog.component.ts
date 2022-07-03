import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  header = '';
  body = '';
  leftButtonLabel: string = ''
  rightbuttonLabel: { label: string, type: string } = { label: '', type: '' };
  constructor(protected dialogRef: NbDialogRef<any>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close('closed');
  }
  submit() {
    if (this.rightbuttonLabel.type == 'save') {
      this.dialogRef.close('saved');
    }
    else if (this.rightbuttonLabel.type == 'delete') {
      this.dialogRef.close('delete');
    }
  }
}
