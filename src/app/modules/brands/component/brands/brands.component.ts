import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';


@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.less']
})
export class BrandsComponent implements OnInit {

  brands$ = this.brandService.getBrands$();

  constructor(private brandService: BrandService) { }

  ngOnInit() {   
      this.brandService.loadBrands(); 
  }


}
