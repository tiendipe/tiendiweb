import {
  Component,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/interfaces/pedido';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RecentOrderComponent implements OnInit {
  @Output() onOpenSideRecentOrderMore: EventEmitter<any> = new EventEmitter();
  @Input() pedidos: Pedido[];

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  openSideRecentOrderMore(): void {
    this.onOpenSideRecentOrderMore.emit();
    this._router.navigate(
      ['/ecommerce/', { outlets: { right: ['siderecentordermore'] } }],
      { skipLocationChange: true }
    );
    console.log(this._router.url);
  }

}
