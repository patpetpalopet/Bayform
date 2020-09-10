import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css']
})
export class TopmenuComponent implements OnInit {
  @Input() public tabmenu: string;
  constructor() { }

  ngOnInit() {

  }

}
