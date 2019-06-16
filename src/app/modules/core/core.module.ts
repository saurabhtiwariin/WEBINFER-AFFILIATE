import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './containers/header-container/header-container.component';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { ClickOutsideModule } from 'ng-click-outside';
import { FilterHomeTypeFormComponent } from '../homes/components/filter-home-type-form/filter-home-type-form.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { SubFooterComponent } from './components/sub-footer/sub-footer.component';
import { HomeFiltersComponent } from '../homes/filters/home-filters/home-filters.component';

@NgModule({
  declarations: [HeaderContainerComponent, NavComponent, FooterComponent, SubFooterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ClickOutsideModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [HeaderContainerComponent,FooterComponent,SubFooterComponent]
})
export class CoreModule { }
