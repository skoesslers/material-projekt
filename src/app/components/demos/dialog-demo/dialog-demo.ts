import { Component } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dialog-demo',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCardModule],
  templateUrl: './dialog-demo.html'
})
export class DialogDemo {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogContent);
  }
}

@Component({
  selector: 'dialog-content',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './dialog-content.html',
  styleUrls: ['./dialog-content.css']
})
export class DialogContent {}
