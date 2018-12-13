import { Component } from '@angular/core';

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

  constructor() {
    console.log('Hello CostomcompomentComponent Component');

    //this.singleValue = 0;
  }

}
