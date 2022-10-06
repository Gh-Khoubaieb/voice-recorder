import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DetailCategoryComponent } from './detail-category/detail-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';

const routes: Routes = [
    {
        path: '',
        component: ListCategoryComponent
    },
    {
        path: 'add',
        component: AddCategoryComponent
    },
    {
        path: 'edit/:id',
        component: AddCategoryComponent
    },
    {
        path: ':id',
        component: DetailCategoryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryRoutingModule { }
