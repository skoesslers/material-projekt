import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-chip',
  templateUrl: './filter-chip.html',
  styleUrl: './filter-chip.scss'
})
export class FilterChip {
  @Input() label: string = '';
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }
}
