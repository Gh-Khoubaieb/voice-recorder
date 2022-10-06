import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable()
export class CategoryService {
  categoryUrl = environment.base_url + Constants.GetCategoryUrl;
  allCategorysUrl = environment.base_url + Constants.GetAllCategorysUrl;
  createCategorysUrl = environment.base_url + Constants.CreateCategorysUrl;

  constructor(private http: HttpClient) { }
  getCategory(id: number): Observable<CategoryDto> {
    return this.http.get<CategoryDto>(this.categoryUrl);
  }
  getAllCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(this.allCategorysUrl);
  }
  createCategory(category: CategoryDto) {
    return this.http.post<any>(this.createCategorysUrl, category);
  }
}
export interface CategoryDto {
  id: number
  name: string
}


