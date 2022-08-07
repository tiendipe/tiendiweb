import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss'],
})
export class BagComponent implements OnInit {
  @Output() onCloseSideBag: EventEmitter<any> = new EventEmitter();
  @Output() onShowTermsSideBag: EventEmitter<any> = new EventEmitter();
  @Input() valueProgress: number = 50;
  itemsSteps: MenuItem[] = [
    {
      label: 'Productos',
      routerLink: [`/ecommerce/`, { outlets: { bag: ['sideproducts'] } }],
      skipLocationChange: false,
    },
    {
      label: 'Despacho y pago',
      routerLink: [
        `/ecommerce/`,
        { outlets: { bag: ['sidepaymentanddelivery'] } },
      ],
      skipLocationChange: false,
    },
  ];
  termsValue: boolean = false;

  constructor(public _router: Router, private messageService: MessageService) {}

  ngOnInit(): void {
    this.valueProgress = 50;
  }

  onActiveIndexChange(index: number) {
    switch (index) {
      case 0:
        this.valueProgress = 50;
        break;
      case 1:
        this.valueProgress = 100;
        break;
      default:
        break;
    }
  }

  nextStep() {
    this.valueProgress += 50;
    this._router.navigate(
      ['/ecommerce/', { outlets: { bag: ['sidepaymentanddelivery'] } }],
      { skipLocationChange: false }
    );
  }

  prevStep() {
    this.valueProgress -= 50;
    this._router.navigate(
      ['/ecommerce/', { outlets: { bag: ['sideproducts'] } }],
      { skipLocationChange: false }
    );
  }

  navigateTerms() {
    this.onShowTermsSideBag.emit();
  }

  closeSideBag() {
    this.onCloseSideBag.emit();
    this._router.navigate(['/ecommerce/'], { skipLocationChange: false });
  }

  sendPedido() {
    this.closeSideBag();

    this.messageService.add({
      key: 'mgsBR',
      severity: 'success',
      summary: 'Pedido enviado',
      detail: 'Lorem ipsum successful message',
      sticky: true
    });
  }
}
