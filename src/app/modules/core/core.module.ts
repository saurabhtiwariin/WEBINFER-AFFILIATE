import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { NavComponent } from './components/nav/nav.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HttpClientModule } from '@angular/common/http';
import { ClickOutsideModule } from 'ng-click-outside';
import { FilterHomeTypeFormComponent } from './components/filter-home-type-form/filter-home-type-form.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [HeaderContainerComponent, NavComponent, FiltersComponent, FilterHomeTypeFormComponent, FooterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ClickOutsideModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [HeaderContainerComponent]
})
export class CoreModule { }
