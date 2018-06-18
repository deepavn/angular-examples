import { Component } from '@angular/core';
import { DecoratorExample } from './decorator-example'
import { MycComponent } from './myc.component';
import{App1Component} from './module1/app1.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  title = 'app';
  mycolspan = 3;
  tborder = 24;
  myalign="left";
  mycolor="fcfcfc";
  mywidth="525px";
  mysrc = "assets/bangles.jpg"
  products =  [
    { productId: 11, productName: 'Bangles', productPrice: 200, productType: 'Jewelry' },
    { productId: 12, productName: 'Earrings', productPrice: 500, productType: 'Jewelry' },
    { productId: 13, productName: 'Ruby Center Gem Engagement Ring', productPrice: 200, productType: 'Rings' },
    { productId: 14, productName: 'Emerald Center Gem Engagement Ring', productPrice: 500, productType: 'Rings' }
]

 
}
