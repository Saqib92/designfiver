import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { CostomcompomentComponent } from '../../components/costomcompoment/costomcompoment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
  	public navCtrl: NavController,
  	public popoverCtrl: PopoverController
  	) {

  }

 presentPopover() {
    const popover = this.popoverCtrl.create(CostomcompomentComponent);
    popover.present();
  }

}
