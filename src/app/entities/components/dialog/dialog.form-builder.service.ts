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
  gymForm: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.gymForm = this._fb.group({
      name: ['', Validators.required],
      trainer: ['', Validators.required],
      date: ['', Validators.required],
      email: ['', Validators.required],
      sauna: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.gymForm.value);
  }
}

// export class DialogFormBuilderService {
//   constructor(private fb: FormBuilder) {}

//   buildForm(): FormGroup {
//     return this.fb.group({
//       name: new FormControl('', [Validators.required]),
//       trainer: new FormControl('', [Validators.required]),
//       date: new FormControl('', [Validators.required]),
//       email: new FormControl('', [Validators.required]),
//       sauna: new FormControl('', [Validators.required]),
//       phone: new FormControl('', [Validators.required]),
//     });
//   }
// }
