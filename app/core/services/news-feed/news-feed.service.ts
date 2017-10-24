import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class NewsFeedService {
  public getPlace():any {
    const place = {
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
    };

    return place;
  }

  public getWall():Array<any> {
    const places = [{
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

    }];

    return places;
  }
}