import { Component, OnInit } from '@angular/core';
import { SporestapiService } from 'src/app/services/sporestapi.service';
import { PersonalInfo } from '../../models/curentuser';
import { Forminfo, DiviceService, VPNService, SocialService } from '../../models/forminfo';
import { from } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { any } from 'bluebird';


declare var $: any;

@Component({
  selector: 'app-f001',
  templateUrl: './f001.component.html',
  styleUrls: ['./f001.component.css']
})
export class F001Component implements OnInit {
  loading = '';
  numshow = 0;
  CurrentUser: any = null;
  ReqId = 'F001' + new Date().getTime();
  UserFill: PersonalInfo = {};
  dataform = new Forminfo();
  DiviceService = new DiviceService();
  VPNService = new VPNService();
  SocialService = new SocialService();
  peplistId = '';
  peplistApp = [];
  peplist = [
    {
      name: 'ชนินธร เจนงามกุล',
      comname: 'TB591000958515P',
      id: '10098516',
    },
    {
      name: 'สายัณห์ พรหมปัญโญ',
      comname: 'TB591000574401P',
      id: '10000933',
    },
    {
      name: 'กฤตวัฒน์ สุวานิชย์',
      comname: 'TB591000188562P',
      id: '10015268',
    }
  ];
  Inven: any;
  isDevice: any;
  isVPN: any;
  isInternet: any;
  isSelf: any;
  isOther: any;
  constructor(private spo: SporestapiService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log(this.ReqId);
    $('#tabfrom .item').tab();
    $('.ui.checkbox').checkbox();
    $('.ui.accordion').accordion();
    this.loadCurrentUser();

  }
  onChangeAddlist(thisItem: any) {
    console.log(thisItem);
    $('#peplist').dropdown({
      onChange: (value: any, text: any, $selectedItem: any) => {
        this.peplistId = value;
        console.log(value);
      }
    });
  }
  loadCurrentUser() {
    this.spo.getCurrentUser().subscribe((res) => {
      console.log(res);
      this.CurrentUser = res;
      this.loadUser(res.d.UserPrincipalName);
    });
  }
  loadUser(mail: string) {
    this.spo.getItems('UserInfo', `$filter=Mail eq 'Sayan.Pro@thanachart.co.th'`).subscribe((res) => {
      console.log(res.d.results[0]);
      this.UserFill = res.d.results[0];
      this.dataform.RequestorId = this.UserFill.ID;
      this.dataform.RequestorMail = this.UserFill.Mail;
      this.dataform.ApproveState.A1.emId = Number(this.UserFill.OData__x004d_an2);
      this.dataform.ApproveState.A2.emId = Number(this.UserFill.OData__x004d_an3);
      this.dataform.ApproveState.A3.emId = Number(this.UserFill.OData__x004d_an4);
      this.DiviceService.ApproveState = this.dataform.ApproveState;
      this.VPNService.ApproveState = this.dataform.ApproveState;
      this.SocialService.ApproveState = this.dataform.ApproveState;
      this.loadInventory('' + this.UserFill.EmployeeId);
    });
  }
  loadInventory(emid: string) {
    // const dv = this.dataform;
    this.spo.getItems('Inventory', `$filter=EmId eq '${emid}'`).subscribe((res) => {
      if (res.error) {
        console.log(res.error.error.message.value);
        console.log(res.options.url);
        this.loading = '';
      } else {
        console.log(res.d.results);
        this.Inven = res.d.results;
        this.loading = '';
        $('#ComputerInfo')
          .dropdown({
            onChange: (value: any, text: any, $selectedItem: any) => {
              const inId = Number(value);
              this.Inven.forEach((element: any) => {
                if (element.ID === inId) {
                  this.dataform.ComputerInfo.pc = element.Title;
                  this.dataform.ComputerInfo.cn = element.Manufacture;
                  this.dataform.ComputerInfo.brand = element.Model;
                  this.dataform.ComputerInfo.sn = element.SerialNumber;
                  this.dataform.ComputerInfo.date = element.Date;
                }
              });
            }
          });
        $('#ComputerInfo').dropdown('set selected', res.d.results[0].ID);
      }
    });
  }
  tabGoTo(tabName: string) {
    $('#tabfrom .item').tab('change tab', tabName);
    $('.ui.checkbox').checkbox();
    $('.ui.accordion').accordion('open', 0);
    this.scrollUp();
  }
  scrollUp() {
    $('.ui.checkbox').checkbox();
    $('.ui.accordion').accordion('open', 0);
    window.scroll(0, 0);
  }
  test(types: string) {
    // this.loading = 'active';
    // tslint:disable-next-line:max-line-length
    const uri = 'https://prod-08.southeastasia.logic.azure.com:443/workflows/03aad8f3ffc04c4e8e979e266ebe1f12/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=M2MZhly4EotfenGzOzgu6be2uuwwBf1A3rzeQqox7sw';
    this.http.post(uri, {
      type: types
    }).subscribe(resp => {
      this.router.navigateByUrl('/f001/list');
      // this.loading = '';
    });
  }
  async SubmitForm() {
    this.loading = 'active';
    if (this.dataform.ServiceSelect.divice) {
      const DiviceForAdd = Object.assign({}, this.DiviceService);
      DiviceForAdd.DeviceSelect = JSON.stringify(DiviceForAdd.DeviceSelect);
      DiviceForAdd.ApproveState = JSON.stringify(DiviceForAdd.ApproveState);
      DiviceForAdd.ReqId = this.ReqId;
      // console.log(DiviceForAdd);
      const Device = await this.spo.addItem('Device', DiviceForAdd).toPromise();

      console.log('DiviceAdd', Device);
    }
    if (this.dataform.ServiceSelect.vpn) {
      const vpnForAdd = Object.assign({}, this.VPNService);
      vpnForAdd.ApproveState = JSON.stringify(vpnForAdd.ApproveState);
      vpnForAdd.ReqId = this.ReqId;
      // console.log(DiviceForAdd);
      const VPN = await this.spo.addItem('VPN', vpnForAdd).toPromise();

      console.log('VPNAdd', VPN);
    }
    if (this.dataform.ServiceSelect.social) {
      const socialForAdd = Object.assign({}, this.SocialService);
      socialForAdd.SocialSelect = JSON.stringify(socialForAdd.SocialSelect);
      socialForAdd.ApproveState = JSON.stringify(socialForAdd.ApproveState);
      socialForAdd.ReqId = this.ReqId;
      // console.log(DiviceForAdd);
      const social = await this.spo.addItem('Social', socialForAdd).toPromise();
      console.log('SocialAdd', social);
    }
    const ReqForAdd = Object.assign({}, this.dataform);
    ReqForAdd.ServiceSelect = JSON.stringify(ReqForAdd.ServiceSelect);
    ReqForAdd.ApproveState = JSON.stringify(ReqForAdd.ApproveState);
    ReqForAdd.ComputerInfo = JSON.stringify(ReqForAdd.ComputerInfo);
    console.log(ReqForAdd);
    this.spo.addItem('F001', ReqForAdd).subscribe(resp => {
      console.log('F001', resp);
    });
    this.loading = '';
  }
}
