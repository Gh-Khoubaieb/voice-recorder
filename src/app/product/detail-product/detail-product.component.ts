import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
@Input()productName:string="test product";
@Input()price:number=21;
@Input()category:string="category";
  constructor() { }

  ngOnInit(): void {
  }

}
