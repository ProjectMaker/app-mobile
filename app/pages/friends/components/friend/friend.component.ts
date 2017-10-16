import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-friend',
  templateUrl: './friend.html'
})
export class FriendComponent implements OnInit {
  protected friend:any = {};
  protected places:Array<any> = [];
  protected placeExpand:any;

  public ngOnInit() {
    this.friend = {
      _id: 3,
      pseudo: 'Snoop Dog',
      img: '~/images/friend.png'
    };

    this.places = [{
      _id: 1, name: 'Le bouillon belge',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    },{
      _id: 2, name: 'Paris Hanoi',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    },{
      _id: 3, name: 'Train bleu',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    }]
  }

  protected onExpand(place) {
    if (this.placeExpand !== place) this.placeExpand = place;
    else this.placeExpand = null;
  }

  protected onAdd(place) {
    console.log('onAdd', place.name);
  }

  protected onMoreInfos(place) {
    console.log('onMoreInfos', place.name);
  }
}