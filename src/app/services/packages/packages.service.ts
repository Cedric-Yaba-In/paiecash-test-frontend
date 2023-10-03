import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Package, ResponseAPI } from 'src/app/entities';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  PackageData:Package[]=[];
  PackageData$:BehaviorSubject<Package[]>=new BehaviorSubject<Package[]>([])

  constructor(private httpClient:HttpClient,private snackBar: MatSnackBar) { 
    this.onLoadingData()
  }

  onLoadingData()
  {
    this.httpClient.get<ResponseAPI<Package[]>>(`${environment.apiUrl}/package/list`)
    .subscribe((data)=>this.addPackagesData(data.data),(error)=>this.snackBar.open(`Erreur: ${error.message}`,"",{
      horizontalPosition: "right",
      verticalPosition: "top",
      duration: 2000,
    }))
  }
  
  addPackageData(pkg:Package)
  {
    this.PackageData.push(pkg);
    this.PackageData$.next(this.PackageData);

  }

  addNewPackage(pkg:Package)
  {
    return new Promise<any>((resolve,reject)=>{
      this.httpClient.post<ResponseAPI<Package[]>>(`${environment.apiUrl}/package/create`,pkg,{
          "headers":{
            "content-type":"application/json"
          }
      })
      .subscribe((data)=>{
        this.addPackageData(pkg);
        resolve(true)
      },(error)=> reject(error.message))
    })
  }

  addPackagesData(pkg:Package[])
  {
    this.PackageData=[...this.PackageData,...pkg];
    this.PackageData$.next(this.PackageData);
  }
}
