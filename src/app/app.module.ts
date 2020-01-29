import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormlyModule } from '@ngx-formly/core';
// import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { CommonModule } from './common/common.module';

import { AppComponent } from './app.component';
import { FormlyFieldCustomInput } from './custom-input.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    // ReactiveFormsModule,
    // FormlyBootstrapModule,
    // FormlyModule.forRoot({
    //   validationMessages: [
    //     { name: 'required', message: 'This field is required' },
    //   ],
    //   types: [
    //     { name: 'custom', component: FormlyFieldCustomInput, wrappers: ['form-field'] },
    //   ],
    // }),
    CommonModule
  ],
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
    // FormlyFieldCustomInput,
  ],
})
export class AppModule { }


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
