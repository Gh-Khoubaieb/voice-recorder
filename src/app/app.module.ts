import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { ProductService } from './shared/services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './shared/header/header.component';
import { DetailCategoryComponent } from './category/detail-category/detail-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { ListCategoryComponent } from './category/list-category/list-category.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuItems } from './shared/menu-item/menu-item';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    NgbModule,
    FontAwesomeModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [ProductService,MenuItems],
  bootstrap: [AppComponent]
})
export class AppModule { }
