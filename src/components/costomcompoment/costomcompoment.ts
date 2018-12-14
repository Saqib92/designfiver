import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the CostomcompomentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'costomcompoment',
  templateUrl: 'costomcompoment.html'
})
export class CostomcompomentComponent {

  singleValue = 0;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello CostomcompomentComponent Component');

    //this.singleValue = 0;
  }

  close(){
  	this.viewCtrl.dismiss({animation: false, duration: 0});
  	console.log("mycall")
  }

}
