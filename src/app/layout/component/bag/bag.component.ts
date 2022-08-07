import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss'],
})
export class BagComponent implements OnInit {
  @Output() onCloseSideBag: EventEmitter<any> = new EventEmitter();
  valueProgress: number = 0;
  // selectedValues: string[] = ['val1', 'val2'];
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

  constructor(public _router: Router, private route: ActivatedRoute) {}

  // currentRoute: string = '';

  ngOnInit(): void {
    this.valueProgress = 50;
    // this.summary();
    // this.currentRoute = this._router.url;
    // console.log(this._router.url);
    // this._router.navigate(
    //     ['/ecommerce/', { outlets: { bag: ['products'] } }],
    //     { skipLocationChange: true }
    // );
    // this._router.navigate(['/ecommerce/', { outlets: { bag: ['sideproducts'] } }], {skipLocationChange: false});
    // console.log(this._router.url);
  }

  onActiveIndexChange(index: number){
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
    // this._router.navigate([`${this._router.url}/paymentanddelivery`])
    // this._router.navigate(['/ecommerce/list', {outlets: {bag: ['paymentanddelivery']}}], {skipLocationChange: true});
    // this._router.navigate(
    //     [`${this.currentRoute}`, { outlets: { bag: ['sidepaymentanddelivery'] } }],
    //     { skipLocationChange: true }
    // );
    this._router.navigate(
      ['/ecommerce/', { outlets: { bag: ['sidepaymentanddelivery'] } }],
      { skipLocationChange: false }
    );
  }

  prevStep() {
    this.valueProgress -= 50;
    // this._router.navigate([`${this._router.url}/products`])
    // this._router.navigate(['/ecommerce/list', {outlets: {bag: ['products']}}], {skipLocationChange: true});
    // this._router.navigate(
    //     [`${this.currentRoute}`, { outlets: { bag: ['sideproducts'] } }],
    //     { skipLocationChange: true }
    // );
    this._router.navigate(
      ['/ecommerce/', { outlets: { bag: ['sideproducts'] } }],
      { skipLocationChange: false }
    );
  }

  navigateTerms() {
    // this._router.navigate(
    //     [`${this.currentRoute}`, { outlets: { bag: ['sidetermsandconditions'] } }],
    //     { skipLocationChange: true, relativeTo: this.route }
    // );
    this._router.navigate(
      ['/ecommerce/', { outlets: { bag: ['sidetermsandconditions'] } }],
      { skipLocationChange: false }
    );
  }

  // termsandcond() {
  //   if (this._router.url.includes('/(bag:sidetermsandconditions)')) return true;
  //   else return false;
  // }

  // paymentanddelivery() {
  //   if (this._router.url.includes('/(bag:sidepaymentanddelivery)')) return true;
  //   else return false;
  // }

  // summary() {
  //   console.log(this._router.url);
  //   if (this._router.url.includes('/(bag:sideproducts)')) return true;
  //   else return false;
  // }

  closeSideBag() {
    this.onCloseSideBag.emit();
    this._router.navigate(['/ecommerce/'], { skipLocationChange: false });
  }
}
