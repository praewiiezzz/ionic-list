import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  // Simple Array here...
  numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  friendArray = [
    {name:'Ant', phoneNumber:'011-111-111', imageUrl:'assets/imgs/ant.png'  }
    ,{name:'Bird', phoneNumber:'022-222-222', imageUrl:'assets/imgs/bird.png'  }
    ,{name:'Cat', phoneNumber:'1333', imageUrl:'assets/imgs/cat.png'  }
    ,{name:'Dog', phoneNumber:'044-444-444', imageUrl:'assets/imgs/dog.png'  }
    ,{name:'Egg', phoneNumber:'555', imageUrl:'assets/imgs/egg.png'  }
  ];

  constructor(public navCtrl: NavController) {
    //การประกาศ constructor แบบ public นี้ทำให้สามารถไปเรียก NavController mี่ไหนก็ได้
    
  }

  show(item){
    console.log(item);
    this.navCtrl.push('FriendDetailPage',item);
  }


}
