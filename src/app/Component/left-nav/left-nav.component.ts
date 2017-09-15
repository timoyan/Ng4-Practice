import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss']
})
export class LeftNavComponent implements OnInit {

  @Output() inputValueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  txtChange(event: any): void {
    this.inputValueChange.emit(event.target.value);
  }
}
