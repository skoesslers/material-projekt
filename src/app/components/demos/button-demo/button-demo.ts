import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule, MatCardModule],
  templateUrl: './button-demo.html',
  styleUrls: ['./button-demo.css']
})
export class ButtonDemo {}
