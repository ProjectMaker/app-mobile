import { Component, OnInit } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: 'app-new-place-detail',
  templateUrl: './new-place-detail.html'
})
export class NewPlaceDetailComponent implements OnInit {
  protected place:any;
  protected newsFeed:any;
  public ngOnInit() {
    this.place = {
      _id: 1, name: 'Le bouillon belge',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    };

    this.newsFeed = {
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

    }
  }
}