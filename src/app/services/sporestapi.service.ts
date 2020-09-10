import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable, from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Headers } from '../models/headers';
import { NodeUrl } from '../models/nodeendpoint';

@Injectable({
  providedIn: 'root'
})
export class SporestapiService {
  // tslint:disable-next-line:ban-types
  private body: Object;
  private endPoint: string;
  // tslint:disable-next-line:ban-types
  private contextinfo: Object;
  private acount = environment.acount.admin;
  constructor(private http: HttpClient) { }
  async getdigit() {
    this.endPoint = `${environment.site_url}/_api/contextinfo`;
    const contextinfo = await this.http.post<any>(this.endPoint, { headers: new HttpHeaders(Headers.post) }).toPromise();
    return contextinfo;
  }
  // tslint:disable-next-line:variable-name
  getItems(_listname: string, _Options = ''): Observable<any> {
    this.endPoint = `${environment.site_url}/_api/web/lists/GetByTitle('${_listname}')/items?` + (_Options ? _Options : '');
    if (environment.production) {
      return this.http.get<any>(this.endPoint, {
        headers: new HttpHeaders(Headers.get)
      });
    } else {
      this.body = {
        endPoint: this.endPoint,
        acount: this.acount,
        siteUrl: environment.site_url
      };
      return this.http.post<any>(NodeUrl.get, this.body);
    }
  }
  // tslint:disable-next-line:variable-name
  getItem(_listname: string, _id: number): Observable<any> {
    this.endPoint = `${environment.site_url}/_api/web/lists/GetByTitle('${_listname}')/items(${_id})`;
    if (environment.production) {
      return this.http.get<any>(this.endPoint, {
        headers: new HttpHeaders(Headers.get)
      });
    } else {
      this.body = {
        endPoint: this.endPoint,
        acount: this.acount,
        siteUrl: environment.site_url
      };
      return this.http.post<any>(NodeUrl.get, this.body);
    }
  }
  getCurrentUser(): Observable<any> {
    this.endPoint = `${environment.site_url}/_api/web/currentuser`;
    if (environment.production) {
      return this.http.get<any>(this.endPoint, {
        headers: new HttpHeaders(Headers.get)
      });
    } else {
      this.body = {
        endPoint: this.endPoint,
        acount: this.acount,
        siteUrl: environment.site_url
      };
      return this.http.post<any>(NodeUrl.get, this.body);
    }
  }
  // tslint:disable-next-line:variable-name
  addItem(_listname: string, _body: object): Observable<any> {
    // tslint:disable-next-line:no-string-literal
    _body['__metadata'] = {
      type: `SP.Data.${_listname}ListItem`
    };
    this.endPoint = `${environment.site_url}/_api/web/lists/GetByTitle('${_listname}')/items`;
    if (environment.production) {
      this.contextinfo = this.getdigit();
      console.log(typeof (this.contextinfo));
      console.log(this.contextinfo);
      // tslint:disable-next-line:no-string-literal
      Headers.post['X-RequestDigest'] = this.contextinfo['GetContextWebInformation'].FormDigestValue;
      return this.http.post<any>(this.endPoint, _body, {
        headers: new HttpHeaders(Headers.post)
      });
    } else {
      this.body = {
        endPoint: this.endPoint,
        acount: this.acount,
        siteUrl: environment.site_url,
        body: _body,
      };
      return this.http.post<any>(NodeUrl.add, this.body);
    }
  }
  // tslint:disable-next-line:variable-name
  delItem(_listname: string, _id: number): Observable<any> {
    this.endPoint = `${environment.site_url}/_api/web/lists/GetByTitle('${_listname}')/items(${_id})`;
    if (environment.production) {
      this.contextinfo = this.getdigit();
      console.log(typeof (this.contextinfo));
      console.log(this.contextinfo);
      // Headers.post['X-RequestDigest'] = this.contextinfo.d.GetContextWebInformation.FormDigestValue;
      return this.http.post<any>(this.endPoint, {
        headers: new HttpHeaders(Headers.post)
      });
    } else {
      this.body = {
        endPoint: this.endPoint,
        acount: this.acount,
        siteUrl: environment.site_url,
        id: _id,
      };
      return this.http.post<any>(NodeUrl.delete, this.body);
    }
  }
  // tslint:disable-next-line:variable-name
  botTalk(_listname: string): Observable<any> {
    this.endPoint = `https://api.dialogflow.com/v1/`;
    // tslint:disable-next-line:no-string-literal
    Headers.post['Authorization'] = 'Bearer c6669677902b4523b15377fea705a224';
    return this.http.post<any>(this.endPoint, {
      headers: new HttpHeaders(Headers.post)
    });
  }
}

