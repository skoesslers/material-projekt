import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-demo',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-demo.html',
  styleUrls: ['./card-demo.css']
})
export class CardDemo {}
