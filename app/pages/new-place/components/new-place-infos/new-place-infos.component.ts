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
  protected experiences:any;
  public form:FormGroup;
  public noteCtrl:AbstractControl;
  public contextsCtrl:AbstractControl;
  public contextValues:Array<any> = CONTEXT_VALUES;

  constructor(private placeService:PlaceService, private fb:FormBuilder, private route:ActivatedRoute, private fonticon:TNSFontIconService) { }
  public ngOnInit() {
    //console.log('ngOnInit', this.route.snapshot.queryParams['new'], this.route.snapshot.params['id']);
    this.place = this.placeService.searchPlaceById(this.route.snapshot.params.id);
    this.experiences = {
      userId: 1,
      contexts: [],
      note: 0,
      comment: ''
    };
    this.initForm();
  }

  protected onChangeContext(event:any, context:any) {
    if (event.object.checked) {
      if (this.experiences.contexts.indexOf(context.value) === -1) this.experiences.contexts.push(context.value);
    } else {
      this.experiences.contexts = this.experiences.contexts.filter(value => value !== context.value);
    }

    this.contextsCtrl.setValue(this.experiences.contexts.join(','));
  }

  protected onChangeStar(note:number) {
    if (this.experiences.note !== note) this.experiences.note = note;
    else this.experiences.note = 0;
    this.noteCtrl.setValue(this.experiences.note);
  }

  protected onSubmit() {
    if (this.form.valid) {
      this.experiences.comment = this.form.controls['comment'].value;
      this.placeService.addPlace(this.place, this.experiences);
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