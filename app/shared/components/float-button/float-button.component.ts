import { Component, EventEmitter, Output } from '@angular/core';
import { TouchGestureEventData, GestureEventData } from 'ui/gestures';
import { Button } from 'ui/button';
import { Color } from 'color';
declare const CGSizeMake:any;
declare const android:any;

@Component({
  moduleId: module.id,
  selector: 'float-button',
  templateUrl: './float-button.html',
  styleUrls: ['./float-button.common.css']
})
export class FloatButtonComponent {
  @Output() tap:EventEmitter<GestureEventData> = new EventEmitter<GestureEventData>();

  protected get shadowColor():Color {
    return new Color('#888888');
  }

  protected get shadowOffset():number {
    return 2.0;
  }

  protected onTap(args: GestureEventData) {
    this.tap.emit(args);
  }

  protected onTouch(args: TouchGestureEventData) {
    /*
    if (args.action === 'down') args.view.className = 'float-btn down';
    else if (args.action === 'up') args.view.className = 'float-btn';
    */
  }

  protected onLoaded(args) {
    let tnsView:any = <any>args.object;
    if (tnsView.android) {
      let nativeView = tnsView.android;
      let shape = new android.graphics.drawable.GradientDrawable();
      shape.setShape(android.graphics.drawable.GradientDrawable.OVAL);
      shape.setColor(android.graphics.Color.parseColor('#30bcff'));
      nativeView.setBackgroundDrawable(shape);
      nativeView.setElevation(20);
    } else if (tnsView.ios) {
      let nativeView = tnsView.ios;
      nativeView.layer.shadowColor = this.shadowColor.ios.CGColor;
      nativeView.layer.shadowOffset = CGSizeMake(0, this.shadowOffset);
      nativeView.layer.shadowOpacity = 0.5;
      nativeView.layer.shadowRadius = 5.0;

    }
  }
}