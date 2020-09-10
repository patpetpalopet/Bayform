import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-approve-page',
  templateUrl: './approve-page.component.html',
  styleUrls: ['./approve-page.component.css']
})
export class ApprovePageComponent implements OnInit {
  page = 'Approver';
  isd = false;
  isv = false;
  iss = false;
  divieLabel = {
    text: '',
    color: '',
  };
  vpnLabel = {
    text: '',
    color: '',
  };
  socailLabel = {
    text: '',
    color: '',
  };
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  reqid: any;
  ngOnInit() {
    this.reqid = +this.route.snapshot.paramMap.get('reqid');
    console.log(this.reqid);
  }
  change(Label: any, text: string, color: string, ids: any) {
    Label.text = text;
    Label.color = color;
    ids = true;
  }
  test(types: string) {
    // this.loading = 'active';
    // tslint:disable-next-line:max-line-length
    const uri = 'https://prod-08.southeastasia.logic.azure.com:443/workflows/03aad8f3ffc04c4e8e979e266ebe1f12/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=M2MZhly4EotfenGzOzgu6be2uuwwBf1A3rzeQqox7sw';
    this.http.post(uri, {
      type: types,
      step: this.reqid
    }).subscribe(resp => {
      this.router.navigateByUrl('/approve');
      // this.loading = '';
    });
  }
}
