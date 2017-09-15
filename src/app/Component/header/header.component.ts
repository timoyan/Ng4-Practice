import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _cv: string;

  constructor() { }

  ngOnInit() {

  }

  @Input('masterName')
  set masterName(masterName: string) {
    this._cv = masterName;
  }

  get masterName(): string { return this._cv; }
}
