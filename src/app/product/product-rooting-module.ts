import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes = [
    {
        path: '',
        component: ListProductComponent
    },
    {
        path: 'add',
        component: AddProductComponent
    },
    {
        path: 'edit/:id',
        component: AddProductComponent
    },
    {
        path: ':id',
        component: DetailProductComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
