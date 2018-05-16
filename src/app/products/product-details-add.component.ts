import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'product-details-add',
  templateUrl: './product-details-add.component.html',
})

export class ProductDetailsAddComponent {

  @Input() productNameAdd: string
  @Output() productPriceAdd = new EventEmitter<number>()

  constructor() {
  }
  ngOnInit() {
 
  }

start() {
    return 100;
}

stop() {
  return -100;
}
  onClickPrice() {
    this.productPriceAdd.emit(999)
  }

}

