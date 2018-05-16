import { Component, Input } from '@angular/core';
import { ProductService } from './product.service'

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
})

export class ProductDetailsComponent {


  InputProductItem_method1: string
  InputProductItem_method2: string
  InputProductItem_method3: string
  InputProductItem_method4: string

  constructor(productService: ProductService) {
  }

  productItem = "Bangles"
  displayInput_method1(event: KeyboardEvent) {

    if (event) {
      let targetElement = <HTMLInputElement>event.target
      this.InputProductItem_method1 = targetElement.value
    }

  }

  displayInput_method2(value: string) {
    this.InputProductItem_method2 = value
  }

  displayInput_method4(value: string) {
    this.productItem = value
  }

}

