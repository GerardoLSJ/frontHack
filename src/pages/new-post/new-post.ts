import { ApiProvider } from './../../providers/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http'

/**
 * Generated class for the NewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {

  private post : FormGroup
  public tagList: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private formBuilder: FormBuilder, 
    public apiProvider: ApiProvider,
    public http: HttpClient ){
    
    this.getTags()

    this.post = this.formBuilder.group({
      title: ['', Validators.required],
      summary: [''],
      bullets: [], 
      law: '', 
      reference: '', 
      tags: [''], 
      notes: 'Sin comentarios'
      });
    }


  createLey(){
    console.log(this.post.value)
    this.apiProvider.postLey()
      .subscribe(res => {
        console.log(res)
        console.log('éxito')
        this.navCtrl.pop()
      }, (err) => {
        console.log(err);
    });
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }


  getTags() {
    this.apiProvider.getTags()
      .subscribe((data: any) => {
        console.log(data)
        this.tagList = data
      })
  }

}
