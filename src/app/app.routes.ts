import { Routes } from '@angular/router';
import { ButtonDemo } from './components/demos/button-demo/button-demo';
import { CardDemo } from './components/demos/card-demo/card-demo';
import { ChipsDemo } from './components/demos/chips-demo/chips-demo';
import { DialogDemo } from './components/demos/dialog-demo/dialog-demo';
import { MenuDemo } from './components/demos/menu-demo/menu-demo';
import { Botstudio } from './features/botstudio/botstudio';
import { HomeOverviewComponent } from './features/Home/home';
import { InputDemo } from './components/demos/input-demo/input-demo';
import { SliderConfigurableExample } from './components/demos/slider-demo/slider-demo';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'button', component: ButtonDemo },
  { path: 'card', component: CardDemo },
  { path: 'chips', component: ChipsDemo },
  { path: 'dialog', component: DialogDemo },
  { path: 'menu', component: MenuDemo },
  { path: 'inputs', component: InputDemo },
  { path: 'botstudio', component: Botstudio },
  { path: 'home', component: HomeOverviewComponent },
  {path: 'slider', component: SliderConfigurableExample}


];
 
