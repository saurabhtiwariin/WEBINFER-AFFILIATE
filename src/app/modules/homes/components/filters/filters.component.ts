import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterBarBase } from 'src/app/modules/homes/filters/home-filters/home-filters.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})
export class FiltersComponent implements OnInit {
  
  @Input() filterBarState: FilterBarBase;
  @Output() toggleFilterDropdown = new EventEmitter<string>();
  @Output() closeFilterDropdown = new EventEmitter<string>();
  @Output() applyFilters = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit() {
  }

}
