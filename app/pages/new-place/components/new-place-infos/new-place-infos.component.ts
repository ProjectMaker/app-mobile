import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

import { PlaceService } from '../../../../core/services';

const CONTEXT_VALUES = [
  { value: 'family', label: 'En famille'},
  { value: 'couple', label: 'En couple'},
  { value: 'friends', label: 'Entre amis'},
  { value: 'meeting', label: 'Pour faire des rencontres'},
];

@Component({
  moduleId: module.id,
  selector: 'app-new-place-infos',
  templateUrl: './new-place-infos.html',
  styleUrls: ["./new-place-infos.common.css", "./new-place-infos.css"],
})
export class NewPlaceInfosComponent implements OnInit {
  protected place:any;
  public form:FormGroup;
  public noteCtrl:AbstractControl;
  public contextsCtrl:AbstractControl;
  public contextValues:Array<any> = CONTEXT_VALUES;

  constructor(private placeService:PlaceService, private fb:FormBuilder, private route:ActivatedRoute, private fonticon:TNSFontIconService) { }
  public ngOnInit() {
    //console.log('ngOnInit', this.route.snapshot.queryParams['new'], this.route.snapshot.params['id']);
    this.place = this.placeService.searchPlaceById(this.route.snapshot.params.id);
    this.place.contexts = [];
    this.initForm();
  }

  protected onChangeContext(event:any, context:any) {
    if (event.object.checked) {
      if (this.place.contexts.indexOf(context.value) === -1) this.place.contexts.push(context.value);
    } else {
      this.place.contexts = this.place.contexts.filter(value => value !== context.value);
    }

    this.contextsCtrl.setValue(this.place.contexts.join(','));
  }

  protected onChangeStar(note:number) {
    if (this.place.note !== note) this.place.note = note;
    else this.place.note = 0;
    this.noteCtrl.setValue(this.place.note);
  }

  protected onSubmit() {
    if (this.form.valid) {
      this.place.comment = this.form.controls['comment'].value;
    }
  }

  private initForm() {
    this.form = this.fb.group({
      comment: this.fb.control('', [Validators.required]),
      note: this.fb.control('', [Validators.required, Validators.pattern(/[1-5]{1}/)]),
      contexts: this.fb.control('', [Validators.required])
    });
    this.noteCtrl = this.form.controls['note'];
    this.contextsCtrl = this.form.controls['contexts'];
  }
}