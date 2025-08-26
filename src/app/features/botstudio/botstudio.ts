import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';



@Component({
  selector: 'app-features-botstudio',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDividerModule, MatCardModule, MatInputModule, MatFormFieldModule, FormsModule, MatChipsModule],
  templateUrl: './botstudio.html',
  styleUrls: ['./botstudio.css']
})
export class Botstudio {}
