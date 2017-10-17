import { Component, OnInit } from '@angular/core';
import { View } from 'ui/core/view';
import { ListView } from 'ui/list-view';
const colorModule = require("color");

@Component({
  moduleId: module.id,
  selector: 'app-new-place',
  templateUrl: 'new-place.html',
  styleUrls: ['./new-place.common.css']
})
export class NewPlaceComponent implements OnInit {
  protected places:Array<any> = [];
  private list:ListView;
  protected itemSelected:any;

  public ngOnInit() {
    this.places = [{
      _id: 1, name: 'Le bouillon belge',
      address: '46 rue des Haies', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    },{
      _id: 2, name: 'Paris Hanoi',
      address: '24 rue d\'Avron', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    },{
      _id: 3, name: 'Train bleu',
      address: '12 rue de Charonne', phone: '+33665433455', openHours: '11:30 - 19:00', contexts: ['friend','couple']
    }, {
      name: 'Le lieu n\' est pas dans la liste',
      footer: true
    }]
  }

  protected onListLoaded(args) {
    this.list = <ListView>args.object;
  }
  
  protected onItemSelected(args) {
    if (this.itemSelected) {
      const index = this.places.findIndex(place => place === this.itemSelected);
      const itemView = <View>this.list.getViewById(`item-${index}`);
      itemView.backgroundColor = new colorModule.Color("#FFFFFF");
      itemView.color = new colorModule.Color("#000000");
    }
    args.view.backgroundColor = new colorModule.Color("#000000");
    args.view.color = new colorModule.Color("#FFFFFF");
    this.itemSelected = this.places[args.index];
  }
};