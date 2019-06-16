import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { filter } from 'rxjs/operators'; 
import { HomeTypes } from 'src/app/modules/homes/filters/home-filters/home-filters.component';

@Component({
  selector: 'app-filter-home-type-form',
  templateUrl: './filter-home-type-form.component.html',
  styleUrls: ['./filter-home-type-form.component.less']
})
export class FilterHomeTypeFormComponent implements OnInit {

  
  @Input() defaultFilters: HomeTypes[];
  @Output() applyHomeTypeFilter = new EventEmitter<string[]>();

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // Will add default values in future lessons.
    this.form = this.fb.group({
      'Entire apartment': [this.defaultFilters.includes('Entire apartment')],
      'Private room': [this.defaultFilters.includes('Private room')],
      'Tree house': [this.defaultFilters.includes('Tree house')],
      'Hotel room': [this.defaultFilters.includes('Hotel room')]
    });
  }

  submit(formvalue){
  const homeTypes = Object.keys(formvalue).filter(filter=>formvalue[filter]);
  this.applyHomeTypeFilter.next(homeTypes);
  }
}
