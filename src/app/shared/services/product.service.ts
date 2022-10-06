import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
    productDetailsUrl=environment.base_url+Constants.GetProductDetailsUrl;
    productEditUrl=environment.base_url+Constants.GetProductEditUrl;
    allProductsUrl=environment.base_url+Constants.GetAllProductsUrl;
    createProductsUrl=environment.base_url+Constants.CreateProductsUrl;
    updateProductsUrl=environment.base_url+Constants.CreateProductsUrl;

  constructor(private http: HttpClient) { }
  getProduct(id:number):Observable<ProductDto> {
    let params = new HttpParams();
    params = params.append('id',id);
    return this.http.get<ProductDto>(this.productDetailsUrl,{params:params});
  }
  getEditProduct(id:number):Observable<InputProductDto> {
    let params = new HttpParams();
    params = params.append('id',id);
    return this.http.get<InputProductDto>(this.productEditUrl,{params:params});
  }
  getAllProducts():Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(this.allProductsUrl);
  }
  createProduct(product:InputProductDto){
    return this.http.post<any>(this.createProductsUrl,product);
  }
  updateProduct(product:InputProductDto){
    return this.http.put<any>(this.updateProductsUrl,product);
  }
}
export interface ProductDto{
    id:number
    productName:string
    price :number
    category:string
    isVisible:boolean
}
export interface InputProductDto{
  id:number
  productName:string
  price :number
  categoryId:number
  isVisible:boolean
}

