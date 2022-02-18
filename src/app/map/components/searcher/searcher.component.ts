import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { SearcherService } from './searcher.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  products: Product[] = [];
  search: string = '';

  tests:any = [{name: 'Uno'},{name: 'Dos'},{name: 'Tres'}]

  subscribe: boolean = false;
  email: boolean = false;

  textemail: string = '';


  constructor(private searcherService: SearcherService) { }

  ngOnInit() {
    this.searcherService.getProductsSmall().then(products => {
        this.products = products;
    });
  }
}
