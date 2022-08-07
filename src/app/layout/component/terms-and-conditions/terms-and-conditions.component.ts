import { Location } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
})
export class TermsAndConditionsComponent implements OnInit {
  @Output() onHideTermsSideBag: EventEmitter<any> = new EventEmitter();
  constructor(private _location: Location) {}

  ngOnInit(): void {}

  navigateBag() {
    this.onHideTermsSideBag.emit();
  }
}
