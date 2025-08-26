import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-input-demo',
  standalone: true,
  imports: [
  CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
  ],
  templateUrl: './input-demo.html',
  styleUrls: ['./input-demo.css']
})
export class InputDemo {
  nameCtrl = new FormControl('');
  emailCtrl = new FormControl('');
  selectCtrl = new FormControl('');
  autoCtrl = new FormControl('');
  dateCtrl = new FormControl(new Date());

  // reactive controls for formerly template-driven controls
  checkboxCtrl = new FormControl(false);
  radioCtrl = new FormControl('a');
  toggleCtrl = new FormControl(false);


  componentOptions: string[] = ['Button', 'Card', 'Chips', 'Dialog', 'Menu', 'Sidenav'];
  allOptions: string[] = ['Button', 'Card', 'Chips', 'Dialog', 'Menu', 'Sidenav', 'Slider', 'Datepicker'];

  checkboxValue = false;
  radioValue = 'a';
  toggleValue = false;

  get filteredOptions() {
    const val = (this.autoCtrl.value || '').toLowerCase();
    return this.allOptions.filter(o => o.toLowerCase().includes(val));
  }

  reset() {
    this.nameCtrl.reset();
    this.emailCtrl.reset();
    this.selectCtrl.reset();
    this.autoCtrl.reset();
    this.dateCtrl.setValue(new Date());
    this.checkboxValue = false;
  this.radioValue = 'a';
  this.toggleValue = false;
  this.checkboxCtrl.setValue(false);
  this.radioCtrl.setValue('a');
  this.toggleCtrl.setValue(false);
  }
}
