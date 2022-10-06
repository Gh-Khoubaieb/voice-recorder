import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      }, {
        path:'products',
        loadChildren: () => import('./product/product-module').then(m => m.ProductModule)
      },
      {
        path:'categories',
        loadChildren: () => import('./category/category-module').then(m => m.CategoryModule)
      },
      { path: 'Pages', loadChildren: () => import('./theme/pages/pages.module').then(m => m.PagesModule) },
      
      { path: 'Projects', loadChildren: () => import('./theme/projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'Parent', loadChildren: () => import('./theme/invoices/invoices.module').then(m => m.InvoicesModule) },
      
    ]
  },
  
     
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
