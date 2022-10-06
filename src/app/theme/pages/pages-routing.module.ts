import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailMissionComponent } from './detail-mission/detail-mission.component';
import { MissionsComponent } from './missions/missions.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { TeleoperatorsComponent } from './teleoperators/teleoperators.component';

const routes: Routes = [
 
  {
    path: 'Profile',
    component:ProfileComponent,
     data: {
      title: 'Profile',
      icon: 'icon-layout-sidebar-left',
      
      caption:
        'Profile works',
      status: true,
    },
  },
  {
    path: 'Missions',
    component:MissionsComponent,
     data: {
      title: 'Missions',
      icon: 'icon-layout-sidebar-left',
      
      caption:
        'Missions works',
      status: true,
    },
  },
  
  {
    path: 'Téléopérateurs',
    component:TeleoperatorsComponent,
     data: {
      title: 'Téléopérateurs',
      icon: 'icon-layout-sidebar-left',
      
      caption:
        'Téléopérateurs works',
      status: true,
    },
  },
  {
    path: 'DetailMission',
    component:DetailMissionComponent,
     data: {
      title: 'DetailMission',
      icon: 'icon-layout-sidebar-left',
      
      caption:
        'DetailMission works',
      status: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
