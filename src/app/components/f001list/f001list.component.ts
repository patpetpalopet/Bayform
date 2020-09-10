import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-f001list',
  templateUrl: './f001list.component.html',
  styleUrls: ['./f001list.component.css']
})
export class F001listComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.label').popup();
    $('#tabfrom .item').tab();
  }

}
