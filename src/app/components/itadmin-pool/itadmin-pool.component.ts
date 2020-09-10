import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-itadmin-pool',
  templateUrl: './itadmin-pool.component.html',
  styleUrls: ['./itadmin-pool.component.css']
})
export class ITAdminPoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.dropdown').dropdown();
  }
  changeAp() {
    $('.tiny.modal').modal({
      autofocus: false
    }).modal('show');
  }
}
