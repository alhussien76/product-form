import { Component, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../../models/products';

import { DropdownFilterOptions } from 'primeng/dropdown';
import { NbDialogService, NbGlobalLogicalPosition, NbIconConfig, NbToastrService } from '@nebular/theme';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { takeWhile } from 'rxjs/operators';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input() products: Product[] = [];
  originalProducts: Product[] = []
  @ViewChild('dropdown') dropdown!: any;
  selectedProduct: Product = {};
  addProductClicked: boolean = false;
  showPassword = true;
  showSaveModel: boolean = false;
  showDeleteModel: boolean = false;
  componentActive: boolean = true;
  logicalPositions = NbGlobalLogicalPosition;
  iconConfig: NbIconConfig = { icon: 'checkmark-circle-2', pack: 'eva' };
  constructor(private dialogService: NbDialogService, private toastrService: NbToastrService) { }
  ngOnDestroy(): void {
    this.componentActive = false;
  }

  ngOnInit(): void {
    this.originalProducts = [...this.products];
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
  productChanged(product: Product) {
    this.selectedProduct = { ...product }
    this.addProductClicked = false;
  }
  addNewProduct() {
    this.dropdown.hide();
    this.addProductClicked = true;
    this.selectedProduct = { id: this.generateUUID() };
  }
  saveProduct() {
    if (this.selectedProduct.id) {
      this.dialogService.open(ConfirmationDialogComponent, {
        autoFocus: false,
        closeOnBackdropClick: false,
        context: {
          header: 'Save changes?',
          body: 'Are you sure you want to save changes made?',
          leftButtonLabel: 'Discard',
          rightbuttonLabel: { label: 'Save', type: 'save' }
        }
      }).onClose.pipe(
        takeWhile(() => this.componentActive)
      ).subscribe(res => {
        //TODO:  save logic
        if (res == 'saved') {
          if (!this.addProductClicked) {
            const productIndex = this.getItemIndex(this.selectedProduct.id!);
            if (productIndex != -1) {
              this.products[productIndex] = { ...this.selectedProduct };
            }
          }
          else if (this.addProductClicked) {
            this.products.push(this.selectedProduct);
            this.addProductClicked = false;
          }
          if (window.screen.width <= 518) {
            this.toastrService.show('Product saved successfully', '',
              { ...this.iconConfig, position: this.logicalPositions.BOTTOM_END }
            );
          }
          else {
            this.toastrService.show('Product saved successfully', '',
              { ...this.iconConfig }
            );
          }
        }
      })
    }
  }
  deleteProduct() {
    this.dialogService.open(ConfirmationDialogComponent, {
      autoFocus: false,
      closeOnBackdropClick: false,
      context: {
        header: `Delete "${this.selectedProduct.name}"`,
        body: `Are you sure you want to delete product? Once deleted, you won't be able to access it again.`,
        leftButtonLabel: 'Discard',
        rightbuttonLabel: { label: 'Delete', type: 'delete' }
      }
    }).onClose.pipe(
      takeWhile(() => this.componentActive)
    ).subscribe(res => {
      //TODO:  delete logic
      if (res == 'delete') {
        if (!this.addProductClicked) {
          const productIndex = this.getItemIndex(this.selectedProduct.id!);
          this.products.splice(productIndex, 1);
          this.selectedProduct = {};
        }
        else if (this.addProductClicked) {
          this.selectedProduct = {};
        }
        if (window.screen.width <= 518) {
          this.toastrService.show('Product deleted successfully', '',
            { ...this.iconConfig, position: this.logicalPositions.BOTTOM_END }
          );
        }
        else {
          this.toastrService.show('Product deleted successfully', '',
            { ...this.iconConfig }
          );
        }
      }
    })
  }
  getItemIndex(id: string): number {
    return this.products.findIndex(product => product.id == id);
  }
  generateUUID(): string {
    return UUID.UUID();
  }
  cancelClicked() {
    if (this.selectedProduct.id) {
      const productIndex = this.getItemIndex(this.selectedProduct.id);
      if (productIndex != -1) {
        this.selectedProduct = { ...this.products[productIndex] };
      }
      else {
        this.selectedProduct = {};
      }
    }
    else {
      this.selectedProduct = {};
    }
  }
}
