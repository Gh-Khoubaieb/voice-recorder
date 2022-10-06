import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddProductComponent } from 'src/app/product/add-product/add-product.component';
import { ProductModule } from 'src/app/product/product-module';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PopupComponent } from './profile/popup/popup.component';
import { ProfileComponent } from './profile/profile.component';
import { MissionsComponent } from './missions/missions.component';
import { TeleoperatorsComponent } from './teleoperators/teleoperators.component';
import { DetailMissionComponent } from './detail-mission/detail-mission.component';
import {MatListModule} from '@angular/material/list';
import {AudioRecorderComponent} from "./profile/recorder/audio-recorder/audio-recorder.component";

@NgModule({
  declarations: [
    PagesComponent,
    ProfileComponent,
    PopupComponent,
    MissionsComponent,
    TeleoperatorsComponent,
    DetailMissionComponent,
      AudioRecorderComponent
    
 
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    FontAwesomeModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ProductModule,
    MatListModule
    
  ],
  providers: [ProductService, CategoryService],
})
export class PagesModule { }
