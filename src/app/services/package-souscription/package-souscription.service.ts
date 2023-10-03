import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Souscription, ResponseAPI } from 'src/app/entities';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackageSouscriptionService {

  souscriptionData:Souscription[]=[];
  souscriptionData$:BehaviorSubject<Souscription[]>=new BehaviorSubject<Souscription[]>([])

  constructor(private httpClient:HttpClient,private snackBar: MatSnackBar) { 
    this.onLoadingData()
  }

  onLoadingData()
  {
    return new Promise((resolve,reject)=>{
      this.httpClient.get<ResponseAPI<Souscription[]>>(`${environment.apiUrl}/package/subscriber/list`)
      .subscribe((data)=>{
        this.addSouscriptionsData(data.data)
        resolve(true)
      },(error)=>{
        this.snackBar.open(`Erreur: ${error.message}`,"",{
          horizontalPosition: "right",
          verticalPosition: "top",
          duration: 2000,
        })
        reject(false)
      })
    })
  }
  
  addSouscriptionData(Souscription:Souscription)
  {
    this.souscriptionData.push(Souscription);
    this.souscriptionData$.next(this.souscriptionData);
  }

  addNewSouscription(data:{userId:number,packageId:number})
  {
    return new Promise<any>((resolve,reject)=>{
      this.httpClient.post<ResponseAPI<Souscription[]>>(`${environment.apiUrl}/package/subscribe/${data.userId}/${data.packageId}`,{
          "headers":{
            "content-type":"application/json"
          }

      })
      .subscribe((data)=>{
        
        this.onLoadingData().then((data)=>resolve(true)).catch((error)=>reject("Unkonw error"))
        
      },(error)=> reject(error.message))
    })
  }

  addSouscriptionsData(Souscriptions:Souscription[])
  {
    this.souscriptionData=[...Souscriptions];
    this.souscriptionData$.next(this.souscriptionData);
  }
}
