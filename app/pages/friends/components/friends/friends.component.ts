import { Component, OnInit } from '@angular/core';
//import * as repeaterModule from "tns-core-modules/ui/repeater";

@Component({
  moduleId: module.id,
  selector: 'app-friends',
  templateUrl: './friends.html'
})
export class FriendsComponent implements OnInit {
  protected friends:Array<any> = [];

  public ngOnInit() {
    this.friends = [{
      _id: 1, pseudo: 'Busta Rhymes', img: '~/images/friend.png'
    }, {
      _id: 2, pseudo: 'Method Man', img: '~/images/friend.png'
    }, {
      _id: 3, pseudo: 'Snoop Dog', img: '~/images/friend.png'
    }, {
      _id: 4, pseudo: 'Big L', img: '~/images/friend.png'
    }]
  }
}