import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TitlesPage } from '../../pages/titles/titles';
import { NewPostPage } from '../../pages/new-post/new-post';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  tags : Array<{id: number, title: string, img: string}>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
    this.tags = [
      {
        "id": 1,
        "title": "Tránsito", 
        "img": "assets/imgs/default.png"
      }, 
      {
        "id": 2,
        "title": "Trámites", 
        "img": "assets/imgs/default.png"
      }, 
      {
        "id": 3,
        "title": "Leyes", 
        "img": "assets/imgs/default.png"
      }
    ]
  }

  goToTitles(id){
    this.navCtrl.push(TitlesPage, id)
  }

  newPost(){
    console.log("clicked")
    this.navCtrl.push(NewPostPage)
  }

}
