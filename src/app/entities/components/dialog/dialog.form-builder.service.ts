import { Injectable } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IGym } from 'src/app/entities/intefaces/app.interface';

@Injectable({
  providedIn: 'root',
})

export class DialogFormBuilderService {
  constructor(private readonly _fb: FormBuilder) {}

  public dialogFormBuilderService(data: IGym): FormGroup {
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

