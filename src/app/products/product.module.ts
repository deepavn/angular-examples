import { NgModule } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import {HighlightDirective} from '../highlight.directive'
import {Example1ElementDirective, Example2ElementDirective, Example3ElementDirective
    , Example4AttributeDirective,Example5EventDirective} from '../example.directive'

    import {ProductDetailsAddComponent} from './product-details-add.component'
    import {ProductDetailsEditComponent} from './product-details-edit.component'
@NgModule({
    declarations: [
        ProductComponent, ProductDetailsComponent
        ,ProductDetailsAddComponent
        ,ProductDetailsEditComponent
        ,HighlightDirective
        ,Example1ElementDirective
        ,Example2ElementDirective
        ,Example3ElementDirective
        ,Example4AttributeDirective
        ,Example5EventDirective
    ],
    exports: [
        ProductComponent
        // ,App1aComponent
    ],
    imports: [CommonModule,
       FormsModule
    ],
    providers: [ProductService]
})



export class ProductModule { }
