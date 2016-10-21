import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    templateUrl: "app/products/product-detail.component.html"
})
export class ProductDetailComponent implements OnInit {
    pageTitle = "Product Detail";

    constructor(private _route: ActivatedRoute, private _router: Router, private _location: Location) { }

    ngOnInit(): void {
        this._route.params.forEach((params: Params) => {
            let id = +params['id']; // + shortcut for converting string to numeric
            this.pageTitle += `: ${id}`;
        });
    }

    onBack(): void {
        this._location.back();
    }
}
