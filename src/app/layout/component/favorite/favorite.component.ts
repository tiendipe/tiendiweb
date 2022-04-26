import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  @Input() selected: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSelected(): void {
    this.selected = !this.selected;
  }
}
