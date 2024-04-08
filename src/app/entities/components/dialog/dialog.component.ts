import { Component, Inject } from '@angular/core';
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
    /**
   * объявление форм групы gymForm
   *
   * @public
   * @type {FormGroup}
   */
  public gymForm: FormGroup;
    /**
   * Заголовок для диалогового окна
   *
   * @public
   * @type {string}
   */
  public title: string = 'Добавление PR';
    /**
   * Текущий год
   *
   * @public
   * @type {Date}
   */
  public currentYear = new Date().getFullYear();
    /**
   * Минимальная дата для выбора
   *
   * @public
   * @type {Date}
   */
  public minDate = new Date(this.currentYear - 1, 0, 1);
    /**
   * Максимальная дата для выбора
   *
   * @public
   * @type {Date}
   */
  public maxDate = new Date();
  /**
   * Конструктор для диалогового окна
   *
   * @constructor
   * @param {DialogFormBuilderService} _fb
   * @param {MatDialogRef<DialogComponent>} _dialogRef
   * @param {ICinema} data
   */
  constructor(
    private readonly _fb: DialogFormBuilderService,
    private readonly _dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGym
  ) {
    this.gymForm = this._fb.dialogFormBuilderService(data);
  }
    /**
   * Отвечает за сохранение введенных данных
   *
   * @method onFormSubmit
   * @return {void}
   * @description передача в главный компонент данных из формы gymForm
   * @public
   */
  public onFormSubmit(): void {
    this._dialogRef.close(this.gymForm.value);
  }
}
