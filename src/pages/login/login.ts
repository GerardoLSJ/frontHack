import { AuthProvider } from './../../providers/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm = {
    email : "",
    pass : ""
  }
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authProvider:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.authProvider.login(this.loginForm.email,this.loginForm.pass).then(
      response=>{
        console.log('login,', response)
      }
    )
    console.log(this.loginForm)
  }

  create(){
    this.authProvider.createUser(this.loginForm.email,this.loginForm.pass).then(
      response=>{
        console.log('create,', response)
      }
    )
    console.log(this.loginForm)
  }
  

}
