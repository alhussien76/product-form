import { Component, OnInit } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { Product } from '../models/products';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> = this.productsService.getProducts().pipe(shareReplay());
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

  }

}
