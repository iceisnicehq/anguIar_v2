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
      trainer: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      sauna: new FormControl(false, [Validators.required]),
      pass: new FormControl('', [Validators.required]),
    });
  }
}

