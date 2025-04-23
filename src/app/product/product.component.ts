import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../Models/Product.class';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() dodaj = new EventEmitter<number>();
  dodajDoKoszyka() {
    this.dodaj.emit(this.product.cena);
  }
}
