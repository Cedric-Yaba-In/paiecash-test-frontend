import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { ResponseAPI, User } from 'src/app/entities';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userData:User[]=[];
  userData$:BehaviorSubject<User[]>=new BehaviorSubject<User[]>([])

  constructor(private httpClient:HttpClient,private snackBar: MatSnackBar) { 
    this.onLoadingData()
  }

  onLoadingData()
  {
    this.httpClient.get<ResponseAPI<User[]>>(`${environment.apiUrl}/user/list`)
    .subscribe((data)=>this.addUsersData(data.data),(error)=>this.snackBar.open(`Erreur: ${error.message}`,"",{
      horizontalPosition: "right",
      verticalPosition: "top",
      duration: 2000,
    }))
  }
  
  addUserData(user:User)
  {
    this.userData.push(user);
    this.userData$.next(this.userData);
  }

  addNewUser(user:User)
  {
    return new Promise<any>((resolve,reject)=>{
      this.httpClient.post<ResponseAPI<User[]>>(`${environment.apiUrl}/auth/register`,user,{
          "headers":{
            "content-type":"application/json"
          }

      })
      .subscribe((data)=>{
        this.addUserData(user);
        resolve(true)
      },(error)=> reject(error.message))
    })
  }

  addUsersData(users:User[])
  {
    console.log("Users ",users)
    this.userData=[...this.userData,...users];
    this.userData$.next(this.userData);
  }
}
