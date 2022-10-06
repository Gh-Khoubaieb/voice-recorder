import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddCategoryComponent } from 'src/app/category/add-category/add-category.component';
import { EnumProduct } from 'src/app/shared/enums';
import {
  CategoryDto,
  CategoryService,
} from 'src/app/shared/services/category.service';
import {
  ProductService,
  InputProductDto,
  ProductDto,
} from 'src/app/shared/services/product.service';
import { ProfileComponent } from 'src/app/theme/pages/profile/profile.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  isChecked1:any;
  isChecked2:any;
  isChecked3:any;
  isChecked4:any;
  isChecked5:any;
  isChecked6:any;
  isVisibles:any;
TypeProduct=[
  {value:EnumProduct.PEXCEPTIONNELS_NUM, viewValue:EnumProduct.PEXCEPTIONNELS},
  {value:EnumProduct.PEXPLOITATION_NUM, viewValue:EnumProduct.PEXPLOITATION},
  {value:EnumProduct.PFINANCIERS_NUM, viewValue:EnumProduct.PFINANCIERS},
]


  public categories: CategoryDto[] | undefined;
  id: any = 0;
  productDto: InputProductDto | undefined;
  public productGroup = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    isVisible: new FormControl('', [Validators.required]),
  });

  constructor(
    private toastr: ToastrService,
    private categoryService: CategoryService,
    private productService: ProductService,
    public dialog: MatDialog,
    private activatedroute: ActivatedRoute,
    public dialogRef: MatDialogRef<ProfileComponent>
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddCategoryComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllCategories();
    });
  }
  getAllCategories() {
    this.categoryService
      .getAllCategories()
      .subscribe((data: Array<CategoryDto>) => {
        this.categories = [...data];
      });
  }
  getProduct(id: number) {
    this.productService.getEditProduct(id).subscribe((res) => {
      this.productDto = res;
      this.productName?.setValue(res.productName);
      this.price?.setValue(res.price);
      this.category?.setValue(res.categoryId, { onlySelf: true });
      this.isVisible?.setValue(res.isVisible);
    });
  }
  ngOnInit(): void {
    this.getAllCategories();
    this.activatedroute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.getProduct(this.id);
    });
    // this.toastr.success('Hello world!', 'Toastr fun!');
  }
  onSubmit() {
    this.productGroup.markAllAsTouched();
    if (this.productGroup.valid) {
      if (this.id > 0) {
        var productDto: InputProductDto = {
          id: this.id,
          productName: this.productGroup.get('productName')?.value,
          price: this.productGroup.get('price')?.value,
          categoryId: this.productGroup.get('category')?.value,
          isVisible: this.productGroup.get('isVisible')?.value,
        };
        this.productService.updateProduct(productDto).subscribe((res) => {
          this.toastr.success('Create product', 'Sucess');
        });
      } else {
        var productDto: InputProductDto = {
          id: this.id,
          productName: this.productGroup.get('productName')?.value,
          price: this.productGroup.get('price')?.value,
          categoryId: this.productGroup.get('category')?.value,
          isVisible: this.productGroup.get('isVisible')?.value,
        };
        this.productService.createProduct(productDto).subscribe((res) => {
          this.toastr.success('Create product', 'Sucess');
        });
      }
    } else {
      //this.toastr.error('Hello world!', 'Toastr fun!');
    }
  }
  get category() {
    return this.productGroup.get('category');
  }
  get price() {
    return this.productGroup.get('price');
  }
  get productName() {
    return this.productGroup.get('productName');
  }
  get isVisible() {
    return this.productGroup.get('isVisible');
  }
}
