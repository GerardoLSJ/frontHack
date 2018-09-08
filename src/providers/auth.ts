import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,
    public  afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');

    // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ...
    // });
  }


  login(email, password){
    this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email,password).then(
      (res)=>{
        console.log(res)
      }

    )
  }

  loginFB(){
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(
      response =>{
        console.log(response)
      },
      error=> console.log(error)
    )
  }

  loginGitHub(){
    this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider()).then(
      response =>{
        console.log(response)
      },
      error=> console.log(error)
    )
  }

  logout(){
    this.afAuth.auth.signOut()
  }


  lol(){
    var that = this

    if (firebase.auth().currentUser) {
      firebase.auth().currentUser.getIdToken( /* forceRefresh */ true).then(function (idToken) {
        // Send token to your backend via HTTPS
        // ...
        console.log('yeeey')
        console.log(idToken)

        that.http.get(`http://127.0.0.1:8000/api/test/`, {
          headers: {
            'Authorization': idToken
          }
        }).subscribe(res => console.log('WWWWOW:', res))

      }).catch(err => console.log(err))
    }else{
      console.log('firebase.auth().currentUser', firebase.auth().currentUser)
    }


    let email = 'g@g.com'
    let password = '123123123'
    // this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(email,password).then(
    //   (res)=>{

    //     var that = this


    //   }

    // )
  }

}
