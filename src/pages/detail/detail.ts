import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  id: number
  title: string
  description: string
  bullets: Array<string>
  notes: string
  link: string

  detail: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: HttpClient) {

      this.detail = this.getDetails(this.navParams.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }


  getDetails(id: number){
    this.http
    .get(`https://lex-app48.herokuapp.com/api/law/${id}/?format=json`)
    .subscribe((data: any) => {
      console.log(data)
      this.detail = data
      
    })
  }
}
