import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-menu-demo',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, MatCardModule],
  templateUrl: './menu-demo.html',
  styleUrls: ['./menu-demo.css']
})
export class MenuDemo {}
