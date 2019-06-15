import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

export type HomeTypes = 'Entire apartment' | 'Hotel room' | 'Private room' | 'Tree house';

export interface FilterBarBase {
  homeType: { open: boolean, filters: HomeTypes[] }
}
export interface Filters {
  homeType: HomeTypes[];
}

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.less']
})
export class HeaderContainerComponent implements OnInit {

  filterBarBase$ = new BehaviorSubject<FilterBarBase>({ homeType: { open: false, filters: [] } })

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getFiltersFromUrlQueryParams().subscribe((filters: Filters) => {
      const filterBarState = this.filterBarBase$.getValue();
      filterBarState.homeType.filters = filters.homeType
      this.filterBarBase$.next(filterBarState);
    });

  }

  toggleFilterDropdown(filter: string) {
    const filters = this.filterBarBase$.getValue();
    filters[filter].open = !filters[filter].open;

    this.filterBarBase$.next(filters);
  }

  closeFilterDropdown(filter: string) {
    const filters = this.filterBarBase$.getValue();
    filters[filter].open = false;

    this.filterBarBase$.next(filters);
  }


  applyFilters(filters: Filters) {
    this.closeFilterDropdown('homeType');
    this.router.navigate(['homes'], { queryParams: { 'home-type': filters.homeType } });

  }


}
