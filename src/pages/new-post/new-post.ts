import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  private post : FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,  
    private formBuilder: FormBuilder){
    
    this.post = this.formBuilder.group({
      title: ['', Validators.required],
      summary: [''],
      bullets: [], 
      law: '', 
      reference: '', 
      tags: [], 
      notes: ''
      });
    }


  logForm(){
    console.log(this.post.value)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }

}
