import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { View } from 'ui/core/view';
import { ListView } from 'ui/list-view';
import { Color } from 'color';

@Component({
  moduleId: module.id,
  selector: 'app-new-place-select',
  templateUrl: 'new-place-select.html',
  styleUrls: ['./new-place-select.common.css']
})
export class NewPlaceSelectComponent implements OnInit {
  protected places:Array<any> = [];
  private list:ListView;
  protected itemSelected:any;

  public constructor(private routerExtensions:RouterExtensions) { }

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
      itemView.backgroundColor = new Color("#FFFFFF");
      itemView.color = new Color("#000000");
    }
    args.view.backgroundColor = new Color("#000000");
    args.view.color = new Color("#FFFFFF");
    this.itemSelected = this.places[args.index];
  }

  protected onPlaceSelected() {
    if (this.itemSelected) this.routerExtensions.navigate(['new-place/infos']);
  }
};