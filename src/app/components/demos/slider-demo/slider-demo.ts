import {Component} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

/**
 * @title Configurable slider
 */
@Component({
  selector: './slider-configurable-example',
  templateUrl: './slider-demo.html',
  styleUrl: './slider-demo.css',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
  ],
})
export class SliderConfigurableExample {
  disabled = false;
  max = 100;
  min = 0;
  showTicks = true;
  step = 1;
  thumbLabel = false;
  value = 0;
}
