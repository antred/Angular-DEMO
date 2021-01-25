import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {products} from "../products";
import {CartService} from "../cart/cart.service";

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    constructor(private route: ActivatedRoute, private CartService: CartService) {

    }

    product;

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.product = products[+params.get("productId")];
        });
    }

    /**
     * 添加商品到购物车
     * @param product
     */
    addToCart(product) {
        this.CartService.addToCart(product);
        window.alert("商品已添加到购物车");
    }

}
