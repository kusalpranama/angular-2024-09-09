import { Component, OnInit } from '@angular/core';
import { ProductitemsComponent } from '../productitems/productitems.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductitemsComponent,NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

public productList:any;

ngOnInit(): void{
  this.loadproductsInfo();
}

loadproductsInfo(){
  fetch('https://fakestoreapi.com/products')
  .then(res=> res.json())
  .then(data => {
    this.productList=data;
  })

}
}
