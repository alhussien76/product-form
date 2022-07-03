import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '../../models/products';

import { DropdownFilterOptions } from 'primeng/dropdown';
import { NbDialogService } from '@nebular/theme';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  @Input() products: Product[] = [];
  @ViewChild('name') productName!: any;
  selectedProduct: Product = {};
  showPassword = true;
  showSaveModel: boolean = false;
  showDeleteModel: boolean = false
  componentActive: boolean = true
  constructor(private dialogService: NbDialogService,) { }
  ngOnDestroy(): void {
    this.componentActive = false;
  }

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
    //this.productName.hide();
    this.selectedProduct = {}
  }
  typeChanged(event: Event) {
    console.log(event)
  }
  saveProduct() {
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
      //TODO: add save logic
    })
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
      //TODO: add delte logic
    })
  }

}
