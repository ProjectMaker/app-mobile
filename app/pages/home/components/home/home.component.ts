import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {
  protected news:Array<any> = [];
  protected places:Array<any> = [];
  public ngOnInit() {
    this.news = [];

    this.places = [{
      name: 'Le bouillon belge',
      users: [{
        pseudo: 'Snoop dog',
        contents: [{
          type: 'photo',
          name: 'Yeah photos',
          images: ['~/images/friend.png','~/images/friend.png','~/images/friend.png']
        }, {
          type: 'comment',
          name: 'It\'s amazing'
        }]
      }],

    },{
      name: 'Paris Hanoi',
      users: [{
        pseudo: 'Busta Rhymes',
        contents: [{
          type: 'comment',
          name: 'It\'s amazing'
        },{
          type: 'photo',
          name: 'Yeah photos',
          images: ['~/images/friend.png']
        }]
      }],

    }]
  }

  protected templateSelector(item: any, index: number, items: any) {
    return item.type;
  }
}