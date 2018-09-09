import { AgendaPage } from './../agenda/agenda';
import { NewProcedurePage } from './../new-procedure/new-procedure';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { TitlesPage } from '../../pages/titles/titles';
import { NewPostPage } from '../../pages/new-post/new-post';
import { HttpClient } from '@angular/common/http'

import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import { ApiProvider } from '../../providers/api';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


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

  tags = [{},{}]

  recording: boolean = false;
  filePath: string;
  fileName: string;
  audio: MediaObject;
  audioList: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: HttpClient, 
    private media: Media,
    public platform: Platform, 
    public apiProvider: ApiProvider, 
    private transfer: FileTransfer, 
    private file: File) {

  }

  ionViewDidLoad() {
    this.getTags()
    console.log('ionViewDidLoad PrincipalPage');
  }

  goToTitles(id, title){
    this.navCtrl.push(TitlesPage, {id: id, title: title})
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
    this.navCtrl.push(NewPostPage)
  }


  openAgenda(){
    this.navCtrl.setRoot(AgendaPage)

  }

  openTramite(){
    this.navCtrl.push(NewProcedurePage)

  }

  ionViewWillEnter() {
    this.getAudioList();
  }


  getAudioList() {
    if(localStorage.getItem("audiolist")) {
      this.audioList = JSON.parse(localStorage.getItem("audiolist"));
      console.log(this.audioList);
      console.log('API PROVIDER: ')
      this.upload()
    }
  }

  startRecord() {
    if (this.platform.is('ios')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'record'+new Date().getDate()+new Date().getMonth()+new Date().getFullYear()+new Date().getHours()+new Date().getMinutes()+new Date().getSeconds()+'.3gp';
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.startRecord();
    this.recording = true;
  }

  stopRecord() {
    this.audio.stopRecord();
    let data = { filename: this.fileName };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
    this.getAudioList();
  }

  playAudio(file,idx) {
    if (this.platform.is('ios')) {
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + file;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.play();
    this.audio.setVolume(0.8);
  }


  upload() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    console.log('fileTransfer',fileTransfer)
    let options: FileUploadOptions = {
       fileKey: 'file',
       fileName: this.fileName,
       headers: {}
    }
  
    fileTransfer.upload(this.filePath, 'https://lex-app48.herokuapp.com/api/audio/', options)
     .then((data) => {
        console.log(data)
     }, (err) => {
       console.log(err)
     })
  }


}
