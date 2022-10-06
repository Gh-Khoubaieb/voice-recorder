import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [{ path: '', component: ProjectsComponent ,
data: {
  title: 'Projects',
  icon: 'flip_to_back',
  caption:
    'projects works',
  status: true,
},}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
