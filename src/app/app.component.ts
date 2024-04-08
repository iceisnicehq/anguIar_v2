import { Component } from '@angular/core';
import { DialogComponent } from './entities/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { IGym } from 'src/app/entities/intefaces/app.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public _dialog: MatDialog) {}
  
  onClick() {
    const dialogRef = this._dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((data: IGym) => {
      if (data) {
        console.table(data)
        this.tableData.push(data);
      }
    });
  }

  public tableData: IGym[] = [
    {
      name: 'john',
      trainer: 'G',
      date: new Date(),
      email: 'denver@ads',
      sauna: true,
      phone: '123',
    },
  ];
}
