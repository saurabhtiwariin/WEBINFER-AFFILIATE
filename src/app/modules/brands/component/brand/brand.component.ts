import { Component, OnInit, Input } from '@angular/core';
import { Brand } from 'src/app/modules/brands/entity/brand';
import { DataState } from '../../services/brand.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.less']
})
export class BrandComponent implements OnInit {

  @Input() brands: DataState<Brand[]>;

  constructor() { }

  ngOnInit() {
  }

}
