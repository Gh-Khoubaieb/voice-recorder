import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "../shared/material.module";
import { CategoryService } from "../shared/services/category.service";

import { CategoryRoutingModule } from "./category-rooting-module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCategoryComponent } from "./add-category/add-category.component";
import { ListCategoryComponent } from "./list-category/list-category.component";
import { EditCategoryComponent } from "./edit-category/edit-category.component";
import { DetailCategoryComponent } from "./detail-category/detail-category.component";
@NgModule({
  declarations: [
    ListCategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    DetailCategoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoryRoutingModule,
    MaterialModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [CategoryService],
})
export class CategoryModule { }
