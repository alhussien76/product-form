import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Products[]>
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().pipe(
      tap(console.log)
    ).subscribe()
  }

}
