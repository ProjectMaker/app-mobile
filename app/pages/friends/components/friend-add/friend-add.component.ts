import { Component, OnDestroy } from '@angular/core';
import { SearchBar } from "ui/search-bar";
import { SnackBar, SnackBarOptions } from "nativescript-snackbar";
import { StackLayout } from 'ui/layouts/stack-layout';
import { GestureTypes } from 'ui/gestures';

@Component({
  moduleId: module.id,
  selector: 'app-friend-add',
  templateUrl: './friend-add.html'
})
export class FriendAddComponent implements OnDestroy {
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
  private page:StackLayout;
  private snackbar:SnackBar = new SnackBar();

  public ngOnDestroy() {
    this.page.off(GestureTypes.tap)
  }

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
    if (!this.searchBar || !this.searchBar.text) return;

    if (this.searchBar.text.length > 1) {
      this.search();
    } else this.clearSearch();
  }

  protected onAdd(friend) {
    const options: SnackBarOptions = {
      actionText: 'Close',
      actionTextColor: '#ff4081', // Optional, Android only
      snackText: 'Friend added',
      hideDelay: 1500,
      //textColor: '#346db2', // Optional, Android only
      //backgroundColor: '#eaeaea' // Optional, Android only
    };
    this.searchBar.dismissSoftInput();
    this.snackbar.action(options);
  }

  protected onSendEmail(email) {
    const options: SnackBarOptions = {
      actionText: 'Close',
      actionTextColor: '#ff4081', // Optional, Android only
      snackText: 'Invitation sent',
      hideDelay: 1500,
      //textColor: '#346db2', // Optional, Android only
      //backgroundColor: '#eaeaea' // Optional, Android only
    };
    this.searchBar.dismissSoftInput();
    this.snackbar.action(options);
  }

  protected onPageLoaded(args) {
    this.page = <StackLayout>args.object;
    this.page.observe(GestureTypes.tap, (args) => {
        this.searchBar.dismissSoftInput();
      });
  }

  private search() {
    this.friends = this._friends.filter((friend) => friend.pseudo.toLocaleLowerCase().indexOf(this.searchBar.text.toLocaleLowerCase()) !== -1);
  }

  private clearSearch() {
    this.friends = [];
  }
}