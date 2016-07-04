import { Injectable } from '@angular/core';
import {Response, Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { Observable }     from 'rxjs/Observable';
@Injectable()
export class IpinfoService {

  constructor(private jsonp: Jsonp) {}
  getInfo(){
    let url = 'http://ipinfo.io/186.95.2222226.85';
    let params = new URLSearchParams();
    params.set('callback', 'JSONP_CALLBACK');
    return this.jsonp
          .get(url, {search: params})
          .map(this.extractData);
  }
 private extractData(request: Response){
   return request.json();
 }
}
