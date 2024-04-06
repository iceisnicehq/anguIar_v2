import {Component} from '@angular/core';
import { DialogComponent } from './entities/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { IGym } from 'src/app/entities/intefaces/app.interface';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public _dialog: MatDialog) {}
  onClick() {
    this._dialog.open(DialogComponent)
  }
}

