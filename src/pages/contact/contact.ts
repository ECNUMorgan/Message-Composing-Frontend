import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemDetailsPage } from '../item-details/item-details';
@Component({
  selector: 'page-contact',
  templateUrl: 'Contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  items = [
    'Taylor Wu',
    'Mike Wang',
    'Mary Lin',
    'Christopher Liu',
    'Eric Wang',
    'Maria Li ',
    'Cathy Zhang',
    'Tina Wu',
    'Lucy Zheng',
    'Kelly Zhou',
    'Tony Zhao',
    'Tiffany Huang',
    'Lisa Zhang',
    'Eva Zhou',
    'Jessie Zhao',
    'Maggie Hu'
  ];

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}

