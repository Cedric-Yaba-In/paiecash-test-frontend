import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductsService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private productService:ProductsService,private snackBar: MatSnackBar,public dialogRef: MatDialogRef<AddProductComponent>,){}
  waitForAPI=false;

  formGroup:FormGroup=new FormGroup({
    name:new FormControl("",[Validators.required]),
    description:new FormControl("",[Validators.required,]),
    price:new FormControl("",[Validators.required])
  });

  submitAddControl()
  {
    this.waitForAPI=true;
    this.productService.addNewProduct(this.formGroup.value)
    .then((result)=>{
      this.waitForAPI=false;
      this.snackBar.open(`Product ajouté avec succes`,"",{
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
