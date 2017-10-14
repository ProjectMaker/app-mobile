import { Component, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
  selector: 'app-action-bar',
  moduleId: module.id,
  templateUrl: './action-bar.html'
})
export class ActionBarComponent implements OnInit {
  @Output() openMenu = new EventEmitter();

  public ngOnInit() {
    console.log('ON INIT');
  }
  
  protected onOpenMenu() {
    this.openMenu.next();
  }
}

