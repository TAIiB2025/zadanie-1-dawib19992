import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { Product } from '../Models/Product.class';
import { CommonModule } from '@angular/common';
import { KoszykComponent } from './koszyk/koszyk.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductComponent, CommonModule, KoszykComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: Product[] = [
    new Product('Laptop ASUS', 2999.99, new Date(2024, 3, 1), true),
    new Product('Mysz Logitech', 149.99, new Date(2024, 2, 15), false),
    new Product('Klawiatura Razer', 399.00, new Date(2024, 1, 5), true),
    new Product('Monitor LG', 1099.99, new Date(2023, 11, 25), false),
    new Product('Słuchawki Sony', 899.49, new Date(2024, 0, 10), true),
  ];

  wartoscKoszyka: number = 0;

  produktyWidoczne: boolean = false;

  dodajDoKoszyka(cena: number) {
    this.wartoscKoszyka += cena;
  }
  toggleProdukty() {
    this.produktyWidoczne = !this.produktyWidoczne;
  }
}
