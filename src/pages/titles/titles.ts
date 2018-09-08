import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../../pages/detail/detail'
import { HttpClient } from '@angular/common/http'

/**
 * Generated class for the TitlesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-titles',
  templateUrl: 'titles.html',
})
export class TitlesPage {

  titles : Array<{id: number, title : string, description : string}>
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    let id = this.navParams.data
    console.log(id)
    console.log('ionViewDidLoad TitlesPage');
    this.getTags(0)
  }

  goToDetail(id : number){
    this.navCtrl.push(DetailPage, id)
  }


  getTags(id: number){
    this.http
    .get('https://lex-app48.herokuapp.com/api/law/?format=json')
    .subscribe((data: any) => {
      console.log(data)
      this.titles = data
      
    })
  }
} 
