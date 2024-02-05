import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Product, ResponseAPI } from 'src/app/entities';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  ProductData:Product[]=[];
  ProductData$:BehaviorSubject<Product[]>=new BehaviorSubject<Product[]>([])

  constructor(private httpClient:HttpClient,private snackBar: MatSnackBar) { 
    this.onLoadingData()
  }

  onLoadingData()
  {
    this.httpClient.get<ResponseAPI<Product[]>>(`${environment.apiUrl}/product/list`)
    .subscribe((data)=>this.addProductsData(data.data),(error)=>this.snackBar.open(`Erreur: ${error.message}`,"",{
      horizontalPosition: "right",
      verticalPosition: "top",
      duration: 2000,
    }))
  }
  
  addProductData(pkg:Product)
  {
    this.ProductData.push(pkg);
    this.ProductData$.next(this.ProductData);

  }

  addNewProduct(pkg:Product)
  {
    return new Promise<any>((resolve,reject)=>{
      this.httpClient.post<ResponseAPI<Product[]>>(`${environment.apiUrl}/product/create`,pkg,{
          "headers":{
            "content-type":"application/json"
          }
      })
      .subscribe((data)=>{
        this.addProductData(pkg);
        resolve(true)
      },(error)=> reject(error.message))
    })
  }

  addProductsData(pkg:Product[])
  {
    this.ProductData=[...this.ProductData,...pkg];
    this.ProductData$.next(this.ProductData);
  }
}
