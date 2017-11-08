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
  private searchView:SearchBar;
  private pageView:StackLayout;
  private snackbar:SnackBar = new SnackBar();

  public ngOnDestroy() {
    this.pageView.off(GestureTypes.tap)
  }

  protected onSearchBarLoaded(args) {
    this.searchView = <SearchBar>args.object;
    this.clearSearch();
  }

  protected get friendsFound() {
    if (this.searchView && this.searchView.text && this.searchView.text.length > 1 && this.friends.length) return true;
    else return false;
  }

  protected get friendsNotFound() {
    if (this.searchView && this.searchView.text && this.searchView.text.length > 1 && !this.friends.length) return true;
    else return false;
  }

  protected onSearchBarChanged() {
    if (!this.searchView || !this.searchView.text) return;

    if (this.searchView.text.length > 1) {
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
    this.searchView.dismissSoftInput();
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
    this.searchView.dismissSoftInput();
    this.snackbar.action(options);
  }

  protected onPageLoaded(args) {
    this.pageView = <StackLayout>args.object;
    this.pageView.observe(GestureTypes.tap, (args) => {
        this.searchView.dismissSoftInput();
      });
  }

  private search() {
    this.friends = this._friends.filter((friend) => friend.pseudo.toLocaleLowerCase().indexOf(this.searchView.text.toLocaleLowerCase()) !== -1);
  }

  private clearSearch() {
    this.friends = [];
  }
}