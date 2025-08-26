import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-chips-demo',
  standalone: true,
  imports: [MatChipsModule, MatCardModule, MatIconModule, MatFormFieldModule],
  templateUrl: './chips-demo.html',
  styleUrls: ['./chips-demo.css']
})
export class ChipsDemo {}
