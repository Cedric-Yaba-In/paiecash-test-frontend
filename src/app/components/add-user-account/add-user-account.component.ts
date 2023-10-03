import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users/users.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-account',
  templateUrl: './add-user-account.component.html',
  styleUrls: ['./add-user-account.component.css']
})
export class AddUserAccountComponent {
  constructor(private userService:UsersService,private snackBar: MatSnackBar,public dialogRef: MatDialogRef<AddUserAccountComponent>,){}
  waitForAPI=false;
  formGroup:FormGroup=new FormGroup({
    fullName:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required, Validators.email])
  });

  submitAddControl()
  {
    this.waitForAPI=true;
    this.userService.addNewUser({...this.formGroup.value,password:"Unknow12345"})
    .then((result)=>{
      this.waitForAPI=false;
      this.snackBar.open(`Compte ajouté avec succes`,"",{
        horizontalPosition: "right",
        verticalPosition: "top",
        duration: 5000,
      })
      this.dialogRef.close()
    }).catch((error)=>{
      this.waitForAPI=false;
      this.snackBar.open(`Erreur: ${error}`,"",{
        horizontalPosition: "right",
        verticalPosition: "top",
        duration: 5000,
      })
    })
  }
}
