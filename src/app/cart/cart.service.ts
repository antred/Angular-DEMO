import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService implements HttpInterceptor {

    items = [];

    constructor(private httpClient: HttpClient) {
    }

    /**
     * 添加到购物车
     * @param product
     */
    addToCart(product) {
        this.items.push(product);
    }

    /**
     * 获取购物车
     */
    getCart() {
        return this.items;
    }

    /**
     * 清空购物车
     */
    clearCart() {
        this.items = [];
        return this.items;
    }

    /**
     * 获取商品运费信息
     */
    getShippingPrices() {
        return this.httpClient.get('/assets/shipping.json');
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request);
    }
}
