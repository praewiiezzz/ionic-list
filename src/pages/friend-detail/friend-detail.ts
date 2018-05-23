import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FriendDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend-detail',
  templateUrl: 'friend-detail.html',
})
export class FriendDetailPage {

  friendData = { name: '', phoneNumber: '', imageUrl: '' }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.friendData = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendDetailPage');
    console.log(this.friendData);
  }

}
