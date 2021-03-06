import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// + ngx-markdown
import { MarkdownModule } from 'ngx-markdown';
// + ng-select
import { NgSelectModule } from '@ng-select/ng-select';
// + ng5-slider
import { Ng5SliderModule } from 'ng5-slider';
// + ngx-quill
import { QuillModule } from 'ngx-quill';
// + ngx-formly
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
// +ngx-formly fields
import { ButtonTypeComponent } from './fields/button.type';
import { TimeTypeComponent } from './fields/timepicker.type';
import { DateTypeComponent } from './fields/datepicker.type';
import { DateTimeTypeComponent } from './fields/datetimepicker.type';
import { NgselectTypeComponent } from './fields/ng-select.type';
import { TagsTypeComponent } from './fields/tags.type';
import { RepeatTypeComponent } from './fields/repeat-section.type';
import { QuillTypeComponent } from './fields/quill.type';
import { SliderTypeComponent } from './fields/slider.type';
import { FormlyTabsetTypeComponent } from './fields/tabset.type';
import { FormlyCardTypeComponent } from './fields/card.type';
import { FormlyFileGridfsComponent } from './fields/file-gridfs.type';
import { FormlyFileUploadComponent } from './fields/file-upload.type';
import { FileValueAccessorDirective } from './fields/file-value-accessor';
import { TemplateTypeComponent } from './fields/template.type';
// + wrappers
import { FormlyWrapperFormFieldComponent } from './fields/form-field.wrapper';
// + formBuilder
import { FormBuilderService } from './fields/form-builder.service';
// + utils
import { SafePipe } from './util/safe.pipe';
import { AppValidators } from './util/app-validators';
import * as moment from 'moment';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentAdapter } from './util/datepicker-adapter';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    MarkdownModule.forRoot(),
    // + ng-select
    NgSelectModule,
    // + ng5-slider
    Ng5SliderModule,
    // + ngx-formly
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validators: [{ name: 'ip', validation: AppValidators.IpValidator }],
      validationMessages: [
        { name: 'minlength', message: AppValidators.minlengthMessage },
        { name: 'maxlength', message: AppValidators.maxlengthMessage },
        { name: 'min', message: AppValidators.minMessage },
        { name: 'max', message: AppValidators.maxMessage },
        { name: 'minbytes', message: AppValidators.minbytesMessage },
        { name: 'maxbytes', message: AppValidators.maxbytesMessage },
        { name: 'pattern', message: AppValidators.patternMessage },
        { name: 'number', message: 'This field should be a number.' },
        { name: 'email', message: 'This field should be a valid email address.' },
        { name: 'datetimelocal', message: 'This field should be a date and time.' },
        { name: 'patternLogin', message: 'This field can only contain letters, digits and e-mail addresses.' },
        // + custom validators
        { name: 'ip', message: AppValidators.ipMessage },
        // - custom validators
        { name: 'required', message: 'This field is required.' }
      ],
      wrappers: [{ name: 'form-field', component: FormlyWrapperFormFieldComponent }],
      types: [
        { name: 'template', component: TemplateTypeComponent },
        { name: 'button', component: ButtonTypeComponent },
        { name: 'time', component: TimeTypeComponent },
        { name: 'date', component: DateTypeComponent },
        { name: 'datetime', component: DateTimeTypeComponent },
        { name: 'card', component: FormlyCardTypeComponent },
        { name: 'tabset', component: FormlyTabsetTypeComponent },
        { name: 'file-gridfs', component: FormlyFileGridfsComponent },
        { name: 'file-upload', component: FormlyFileUploadComponent },
        { name: 'quill', component: QuillTypeComponent },
        { name: 'slider', component: SliderTypeComponent },
        { name: 'ng-select', component: NgselectTypeComponent },
        { name: 'tags', component: TagsTypeComponent },
        { name: 'repeat', component: RepeatTypeComponent }
      ]
    }),
    // + quill
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'],

          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }], // outdent/indent

          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          [{ color: [] }, { background: [] }], // dropdown with defaults from theme
          [{ font: [] }],
          [{ align: [] }],

          ['clean'], // remove formatting button

          ['link', 'image', 'video'] // link and image, video
        ]
      }
    })
  ],
  exports: [
    FileValueAccessorDirective,
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    MarkdownModule,
    NgSelectModule,
    FormlyModule,
    FormlyBootstrapModule,
    QuillModule,
  ],
  declarations: [
    SafePipe,
    // + ngx-formly
    TemplateTypeComponent,
    ButtonTypeComponent,
    TimeTypeComponent,
    DateTypeComponent,
    DateTimeTypeComponent,
    FormlyCardTypeComponent,
    NgselectTypeComponent,
    TagsTypeComponent,
    RepeatTypeComponent,
    QuillTypeComponent,
    SliderTypeComponent,
    FileValueAccessorDirective,
    FormlyFileGridfsComponent,
    FormlyFileUploadComponent,
    FormlyTabsetTypeComponent,
    FormlyWrapperFormFieldComponent
  ],
  providers: [SafePipe, FormBuilderService, { provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }]
})
export class CommonModule {}
