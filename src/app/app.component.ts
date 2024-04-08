import { Component } from '@angular/core';
import { DialogComponent } from './entities/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { IGym } from 'src/app/entities/intefaces/app.interface';

import { FormControl } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public _dialog: MatDialog) {}
  inputMask = createMask('999999');
  maskFC = new FormControl('');

  onClick() {
    const dialogRef = this._dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((data: IGym) => {
      if (data) {
        console.table(data);
        this.tableData.push(data);
      }
    });
  }

  public tableData: IGym[] = [
    {
      name: 'John',
      trainer: 'G',
      date: new Date(),
      email: 'denver@ads',
      sauna: true,
      pass: '142',
    },
  ];
  onDelete(name: string) {
    const index = this.tableData.findIndex((item) => item.name === name);
    this.tableData.splice(index, 1);
  }
}
