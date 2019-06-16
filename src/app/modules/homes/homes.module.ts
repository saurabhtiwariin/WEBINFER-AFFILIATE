import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListContainerComponent } from './containers/home-list-container/home-list-container.component';
import { HomesRoutingModule } from './home-routing.module';
import { HomeListComponent } from './components/home-list/home-list.component';
import { HomeComponent } from './components/home/home.component';
import { HomeFiltersComponent } from './filters/home-filters/home-filters.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterHomeTypeFormComponent } from './components/filter-home-type-form/filter-home-type-form.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeListContainerComponent, HomeListComponent, HomeComponent, HomeFiltersComponent,FiltersComponent,FilterHomeTypeFormComponent],
  imports: [
    CommonModule,
    HomesRoutingModule,
    ClickOutsideModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomesModule { }
