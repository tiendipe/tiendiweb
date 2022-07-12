import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IPedido } from 'src/app/interfaces/pedido';
// import { IProducto } from 'src/app/interfaces/producto';
import { PedidoService } from 'src/app/services/pedido.service';
import { CONSTANT } from '../../shared/service';
import { SessionInfo } from '../../shared/session/session.service';

// interface productSummary {
//   name: string;
//   price: number;
//   quantity: number;
// }

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class CartSummaryComponent implements OnInit {
  @Input() scroll: boolean = false;
  @Input() pedido: IPedido;

  constructor() {}

  ngOnInit(): void {}

  restOrDelete(i: number) {
    // TODO: revisar
    // if (this.products[i].quantity == 1) this.products.splice(i, 1);
    // else this.products[i].quantity -= 1;
  }

  deleteItem(i: number) {
    // TODO: revisar
    // this.products.splice(i, 1);
  }
}
