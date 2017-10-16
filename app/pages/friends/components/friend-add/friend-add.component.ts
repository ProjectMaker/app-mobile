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
  private searchPhrase:string = '';
  private searchBar:SearchBar;

  protected onSearchBarLoaded(args) {
    this.searchBar = <SearchBar>args.object;
    this.clearSearch();
  }

  protected get friendsFound() {
    if (this.searchBar && this.searchBar.text.length > 1 && this.friends.length) return true;
    else return false;
  }

  protected get friendsNotFound() {
    if (this.searchBar && this.searchBar.text.length > 1 && !this.friends.length) return true;
    else return false;
  }

  public onSubmit(args) {
    alert("You are searching for " + this.searchBar.text);
  }

  public onTextChanged(args) {
    if (!this.searchBar.text) return;

    if (this.searchBar.text.length > 1) {
      this.searchPhrase = this.searchBar.text.toLocaleLowerCase();
      this.search();
    } else this.clearSearch();
  }

  protected onAdd(friend) {
    console.log('onAdd', friend);
  }

  private search() {
    this.friends = this._friends.filter((friend) => friend.pseudo.toLocaleLowerCase().indexOf(this.searchPhrase) !== -1);
  }

  private clearSearch() {
    //this.searchBar.text = '';
    this.friends = [];
  }
}