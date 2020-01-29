import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
// Load YAML file from remote
import { HttpClient } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import * as jsyaml from 'js-yaml';
import * as _ from 'lodash';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [];
  title = 'Formly is Terrific!';
  ready = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/forms/demo.yaml', { responseType: 'text', observe: 'response' })
    .pipe(
      filter(res => res.ok),
      map(response => jsyaml.load(response.body || ''))
    ).subscribe((data: any) => this.convertConfiguration(data));
  }

  convertConfiguration(data: any): void {
    this.fields = data.fields;
    this.title = data.title;
    this.ready = true;
  }


  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
