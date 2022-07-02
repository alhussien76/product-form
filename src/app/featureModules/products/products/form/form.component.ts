import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Product } from '../../models/products';

import { DropdownFilterOptions } from 'primeng/dropdown';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() products: Product[] = [];
  selectedProduct: Product = {};
  showPassword = true;
  constructor() { }

  ngOnInit(): void {
  }
  // input password
  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  //end 
  toggle(checked: boolean) {
  }
  productChanged(product: Product) {
  }
  addNewProduct() {
    this.selectedProduct = {}
  }
  typeChanged(event: Event) {
    console.log(event)
  }

}
