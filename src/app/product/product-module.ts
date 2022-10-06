import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../shared/material.module";
import { CategoryService } from "../shared/services/category.service";
import { ProductService } from "../shared/services/product.service";
import { AddProductComponent } from "./add-product/add-product.component";
import { ListProductComponent } from "./list-product/list-product.component";
import { ProductRoutingModule } from "./product-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditProductComponent } from "./edit-product/edit-product.component";
import { DetailProductComponent } from "./detail-product/detail-product.component";
@NgModule({
  declarations: [
    ListProductComponent,
    AddProductComponent,
    EditProductComponent,
    DetailProductComponent
  ],
  exports: [ AddProductComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [ProductService, CategoryService],
})
export class ProductModule { }
