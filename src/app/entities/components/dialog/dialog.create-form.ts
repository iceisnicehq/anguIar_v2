import { Injectable } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IGym } from 'src/app/entities/intefaces/app.interface';
/**
 * @service {createDialogForm}
 * @description для создания реактивных форм
 */
@Injectable({
  providedIn: 'root',
})

export class createDialogForm {
  constructor(private readonly _fb: FormBuilder) {}
  /**
   * @method createDialogForm
   * @description создание форм группы
   * @param {IGym} [data] - начальные данные из главного компонента
   * @returns {FormGroup} возвращает форм группу
   */
  public createDialogForm(data: IGym): FormGroup {
      return this._fb.group({
        name: new FormControl('', [Validators.required]),
        lift: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
        eqt: new FormControl('', [Validators.required]),
        natural: new FormControl(false, [Validators.required]),
        weight: new FormControl('', [Validators.required]),
      });
  }
}

