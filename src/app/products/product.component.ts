import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ProductModel } from './product-model'
import { ProductDetailsEditComponent } from './product-details-edit.component'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
})

export class ProductComponent {
  products: ProductModel[]
  isActive = 1
  productPrice: number
  myPName: String = "Diamond Sita Pendant"
  myProductData: string;

  constructor(private productService: ProductService) {

  }

  @ViewChild(ProductDetailsEditComponent)
  private pdetailsEditComponent: ProductDetailsEditComponent;


  ngOnInit() {
    this.products = this.productService.getProducts()
    this.myProductData = this.pdetailsEditComponent.displayData()

  }

  showPrice(num: number) {
    this.productPrice = num
  }

}


