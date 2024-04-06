import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private dialogFormBuilderService: DialogFormBuilderService) {
    this.gymForm = this.dialogFormBuilderService.gymForm;
  }

  onFormSubmit() {
    this.dialogFormBuilderService.onSubmit();
  }
}
