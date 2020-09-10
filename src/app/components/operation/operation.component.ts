import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {
  states = true;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    $('#tabwork .item').tab();
    $('.rating').rating('disable');
  }
  test(types: string) {
    // this.loading = 'active';
    // tslint:disable-next-line:max-line-length
    const uri = 'https://prod-08.southeastasia.logic.azure.com:443/workflows/03aad8f3ffc04c4e8e979e266ebe1f12/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=M2MZhly4EotfenGzOzgu6be2uuwwBf1A3rzeQqox7sw';
    this.http.post(uri, {
      type: types
    }).subscribe(resp => {
      // this.router.navigateByUrl('/f001/list');
      // this.loading = '';
    });
  }
  view(state: any) {
    this.states = state;
    $('.large.modal')
      .modal({
        onApprove: () => {
          if (this.states) {
            $('#tabwork .item').tab('change tab', 'pending');
          } else {
            $('#tabwork .item').tab('change tab', 'completed');
          }
        }
      })
      .modal('show')
      ;
  }
}
