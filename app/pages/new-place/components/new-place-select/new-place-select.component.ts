import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { View } from 'ui/core/view';
import { ListView } from 'ui/list-view';
import { Color } from 'color';
import { PlaceService } from '../../../../core/services';

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

  public constructor(private placeService:PlaceService, private routerExtensions:RouterExtensions) { }

  public ngOnInit() {
    console.log('SELECT onInit');
    const position:any = {};
    this.places = [...this.placeService.searchPlaces(position)];
    this.places.push({
        name: 'Le lieu n\' est pas dans la liste',
        footer: true
      });
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
    if (this.itemSelected) this.routerExtensions.navigate(['new-place', this.itemSelected.placeId, 'infos'], { queryParams: { new: 1 } });
  }
};