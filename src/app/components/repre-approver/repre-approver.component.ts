import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-repre-approver',
  templateUrl: './repre-approver.component.html',
  styleUrls: ['./repre-approver.component.css']
})
export class RepreApproverComponent implements OnInit {
  page = 'Approver';
  constructor() { }

  ngOnInit() {
     $('.dropdown').dropdown();
  }

}
