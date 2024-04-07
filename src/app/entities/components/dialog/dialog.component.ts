import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IGym } from 'src/app/entities/intefaces/app.interface';
import { DialogFormBuilderService } from 'src/app/entities/components/dialog/dialog.form-builder.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  public title: string = 'Booking a session';
  currentYear = new Date().getFullYear();
  minDate = new Date(this.currentYear - 1, 0, 1);
  maxDate = new Date();
  public gymForm: FormGroup;

  @Output() public formSubmitted = new EventEmitter<IGym>();
  constructor(
    private readonly _fb: DialogFormBuilderService,
    private readonly _dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGym
  ) {
    this.gymForm = this._fb.dialogFormBuilderService(data);
  }
  message?: IGym;
  public onFormSubmit() {
    console.log(this.gymForm.value);
    this.message = this.gymForm.value;
    this.formSubmitted.emit(this.gymForm.value);
    this._dialogRef.close();
  }
}
