import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { InvoicesComponent } from './invoices.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
{
  path: 'Child',
  component:DetailComponent,
   data: {
    title: 'Child',
    icon: 'icon-layout-sidebar-left',
    
    caption:
      'Child works',
    status: true,
  }},
  {
    path: 'List',
    component:ListComponent,
     data: {
      title: 'List',
      icon: 'icon-layout-sidebar-left',
      
      caption:
        'List works',
      status: true,
    }},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
