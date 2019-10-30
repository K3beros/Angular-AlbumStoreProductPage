import { ProductService } from '../product.service';
import { Product } from '../product';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products: Product[];
  
  constructor(private _prodctService: ProductService) { }

  ngOnInit() {
    this._prodctService.getProducts().subscribe(response => this.products = response)
  }

}
