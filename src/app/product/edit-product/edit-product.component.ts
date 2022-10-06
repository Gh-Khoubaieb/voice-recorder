import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  selected='trello';
  constructor() { }

  ngOnInit(): void {
  }
  onNoClick(){
    console.log('no');
  }
}
