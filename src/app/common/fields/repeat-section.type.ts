import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'jhi-formly-repeat-section',
  template: `
    <fieldset>
      <legend>{{ to.label }}</legend>
      <div *ngFor="let field of field.fieldGroup; let i = index" class="d-flex justify-content-between">
        <formly-field [field]="field"></formly-field>
        <div class="my-auto">
          <button class="btn btn-danger btn-sm" type="button" (click)="remove(i)"><i class="fas ban"></i> Remove</button>
        </div>
      </div>
      <button class="btn btn-primary" type="button" (click)="add()"><i class="fas plus"></i> {{ to.addText }}</button>
    </fieldset>
  `
})
export class RepeatTypeComponent extends FieldArrayType {}
