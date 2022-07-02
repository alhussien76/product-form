import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbFormFieldModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { DropdownModule } from 'primeng/dropdown';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PasswordModule } from 'primeng/password';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { DropdownFilterOptions } from 'primeng/dropdown';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbSpinnerModule,
    DropdownModule,
    NbEvaIconsModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbRadioModule,
    NbCheckboxModule,
    PasswordModule,
    NbSelectModule,
    NzSelectModule,


  ],
  exports: [
    FormsModule,
    NbCardModule,
    NbButtonModule,
    NbSpinnerModule,
    DropdownModule,
    NbEvaIconsModule,
    NbInputModule,
    NbFormFieldModule,
    NbIconModule,
    NbRadioModule,
    NbCheckboxModule,
    PasswordModule,
    NbSelectModule,
    NzSelectModule,
  ]
})
export class SharedModule { }
