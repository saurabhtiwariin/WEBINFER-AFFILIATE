import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { BrandsComponent } from './component/brands/brands.component';
import { BrandsRoutingModule } from './brand-routing.module';
import { BrandComponent } from './component/brand/brand.component';

@NgModule({
  declarations: [ BrandsComponent, BrandComponent],
  imports: [
    CommonModule,
    BrandsRoutingModule
  ]
})
export class BrandsModule { }
