import { Component, OnInit } from '@angular/core';
import { ProductDto, ProductService } from '../../shared/services/product.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  product:ProductDto|undefined;
  products:ProductDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['isVisible','productName', 'price', 'category','actions'];
   constructor(private productService:ProductService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllProducts();
   }
 
   getProduct(){ 
       this.productService.getProduct(1)
         .subscribe((data: ProductDto) => this.product = { ...data });  
   }
 
   getAllProducts(){ 
     this.productService.getAllProducts()
       .subscribe((data: Array<ProductDto>) => {
         this.products = [...data]  ;
       this.resultsLength=this.products?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addProduct(){
    
  }
 }
