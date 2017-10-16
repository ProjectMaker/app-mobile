import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-friend',
  templateUrl: './friend.html'
})
export class FriendComponent implements OnInit {
  protected friend:any = {};
  protected places:Array<any> = [];

  public ngOnInit() {
    this.friend = {
      _id: 3,
      pseudo: 'Snoop Dog',
      img: '~/images/friend.png'
    };

    this.places = [{
      _id: 1, name: 'Le bouillon belge'
    },{
      _id: 2, name: 'Paris Hanoi'
    },{
      _id: 1, name: 'Train bleu'
    }]
  }
}