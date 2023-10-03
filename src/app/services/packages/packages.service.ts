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
  
  addPackageData(Package:Package)
  {
    this.PackageData.push(Package);
    this.PackageData$.next(this.PackageData);

  }

  addPackagesData(Packages:Package[])
  {
    console.log("Packages ",Packages)
    this.PackageData=[...this.PackageData,...Packages];
    this.PackageData$.next(this.PackageData);
  }
}
