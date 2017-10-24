import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";

@Injectable()
export class FriendService {
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

  public searchFriends(pseudo):Array<any> {
    const friends = [{
      _id: 1, pseudo: 'Phife'
    },{
      _id: 2, pseudo: 'Dj Shadow'
    },{
      _id: 3, pseudo: 'Fresh Prince'
    },{
      _id: 4, pseudo: 'Tom'
    }];
    pseudo = pseudo.toLocaleLowerCase();
    return friends.filter((friend) => friend.pseudo.toLocaleLowerCase().indexOf(pseudo) !== -1);;
  }
}