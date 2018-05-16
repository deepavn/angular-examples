import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'product-details-edit',
  templateUrl: './product-details-edit.component.html',
})

export class ProductDetailsEditComponent {

  @Input() productNameAdd: string
  @Output() productPriceAdd = new EventEmitter<number>()

  constructor() {
  }
  ngOnInit() {
 
  }

saveData() {
    return "Data Saved";
}

displayData() {
  return "Data Displayed";
}
  onClickPrice() {
    this.productPriceAdd.emit(999)
  }

}

