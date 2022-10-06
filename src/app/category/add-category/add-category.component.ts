import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryDto, CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  public categories: CategoryDto[] | undefined;

  public categoryGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),   
  });

  constructor(private toastr: ToastrService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    // this.toastr.success('Hello world!', 'Toastr fun!');
   // this.getAllCategories();
  }
  onSubmit() {
    this.categoryGroup.markAllAsTouched();
    if (this.categoryGroup.valid) {
      var categoryDto: CategoryDto = {
        id: 0,
       name:this.name?.value
      }
      this.categoryService.createCategory(categoryDto).subscribe(res => {
        this.toastr.success('Create category', 'Sucess');
      });

    }
    else {
      //this.toastr.error('Hello world!', 'Toastr fun!');
    }
  }

  get name() { return this.categoryGroup.get('name'); }
}
