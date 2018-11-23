import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material';
import { HeaderComponent } from './header.component';
import {AppDescriptorService} from '../common/services/app-descriptor.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    HttpClientModule
  ],
  declarations: [HeaderComponent],
  providers: [ AppDescriptorService ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
