import {Component, OnInit} from '@angular/core';
import {CartService} from "./cart.service";
import {FormBuilder} from "@angular/forms";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    }

    items: any[];
    checkoutForm;

    ngOnInit(): void {
        this.items = this.cartService.getCart();
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
    }

    onSubmit(customerData): void {
        this.items = this.cartService.clearCart();
        this.checkoutForm.reset();
        window.alert("订单已确认.");
    }

}
