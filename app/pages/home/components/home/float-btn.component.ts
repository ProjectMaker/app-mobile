import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'float-btn',
  templateUrl: './float-btn.html',
  styles: [
    `
      .float-btn {
        background-color: #30bcff;
        border-radius: 28;
        width: 56;
        height: 56;
        text-align: center;
        vertical-align: middle;
      }
      
      .float-btn-text {
        color: #ffffff;
        font-size: 36;
        margin-top: -4;
      }
    `
  ]

})
export class FloatBtnComponent { }