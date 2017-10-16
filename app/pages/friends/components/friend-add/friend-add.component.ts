import { Component } from '@angular/core';
import { SearchBar } from "ui/search-bar";

@Component({
  moduleId: module.id,
  selector: 'app-friend-add',
  templateUrl: './friend-add.html'
})
export class FriendAddComponent {
  private _friends:Array<any> = [{
    _id: 1, pseudo: 'Phife'
  },{
    _id: 2, pseudo: 'Dj Shadow'
  },{
    _id: 3, pseudo: 'Fresh Prince'
  },{
    _id: 4, pseudo: 'Tom'
  }];

  protected friends:Array<any> = [];
  private searchBar:SearchBar;

  protected onSearchBarLoaded(args) {
    this.searchBar = <SearchBar>args.object;
    this.clearSearch();
  }

  protected get friendsFound() {
    if (this.searchBar && this.searchBar.text && this.searchBar.text.length > 1 && this.friends.length) return true;
    else return false;
  }

  protected get friendsNotFound() {
    if (this.searchBar && this.searchBar.text && this.searchBar.text.length > 1 && !this.friends.length) return true;
    else return false;
  }

  protected onSearchBarChanged() {
    if (!this.searchBar.text) return;

    if (this.searchBar.text.length > 1) {
      this.search();
    } else this.clearSearch();
  }

  protected onAdd(friend) {
    console.log('onAdd', friend);
  }

  protected onSendEmail(email) {
    console.log('onSendEmail', email);
  }

  private search() {
    this.friends = this._friends.filter((friend) => friend.pseudo.toLocaleLowerCase().indexOf(this.searchBar.text.toLocaleLowerCase()) !== -1);
  }

  private clearSearch() {
    this.friends = [];
  }
}