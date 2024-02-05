import { Component } from '@angular/core';
import { Product } from 'src/app/entities';
import { ProductsService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  dataSource:Product[]=[]
  displayedColumns:string[]=["name","description","price"]
  constructor(private ProductService:ProductsService){}
  
  ngOnInit()
  {
    this.ProductService.ProductData$.subscribe((data)=>this.dataSource=[...data])
  }
}
