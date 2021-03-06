import { Component } from '@angular/core';
import {ViewController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;

  constructor(public viewCtrl: ViewController,
              private navParams: NavParams) {}

  ionViewDidLoad(){
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

  onCloseModal (){
    this.viewCtrl.dismiss()
  }
}
