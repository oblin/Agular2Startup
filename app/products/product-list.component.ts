import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: [ 'app/products/product-list.component.css' ]
})
export class ProductListComponent implements OnInit  {
    pageTitle = "Product List";
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) { } 

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClick(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}
