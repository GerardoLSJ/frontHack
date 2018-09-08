import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TitlesPage } from '../../pages/titles/titles';
import { NewPostPage } from '../../pages/new-post/new-post';
import { HttpClient } from '@angular/common/http'

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface Tag {
  id:number,
  title:string,
  description:string
}

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  tags : Array<Tag>
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.getTags()
    console.log('ionViewDidLoad PrincipalPage');
  }

  goToTitles(id){
    this.navCtrl.push(TitlesPage, id)
  }

  getTags(){
    this.http
    .get('https://lex-app48.herokuapp.com/api/tags/?format=json')
    .subscribe((data: Tag[]) => {
      console.log(data)
      this.tags = data
    })
  }

  
  newPost(){
    console.log("clicked")
    this.navCtrl.push(NewPostPage)
  }

  openLey(){

  }


  openAgenda(){

  }

  openTramite(){
    
  }
}
