import { Component, OnInit } from '@angular/core';
import { faCheckCircle, faCheckDouble, faCoffee, faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CategoryDto, CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  category:CategoryDto|undefined;
  categories:CategoryDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['name'];
   constructor(private categoryService:CategoryService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllProducts();
   }
 
   getProduct(){ 
       this.categoryService.getCategory(1)
         .subscribe((data: CategoryDto) => this.category = { ...data });  
   }
 
   getAllProducts(){ 
     this.categoryService.getAllCategories()
       .subscribe((data: Array<CategoryDto>) => {
         this.categories = [...data]  ;
       this.resultsLength=this.categories?.length;
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
