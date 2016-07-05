import { Injectable } from '@angular/core';
import {Response, Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class IpinfoService {

  constructor(private jsonp: Jsonp) {}
  
  /**
   * getInfo from ip-api.com jsonp, ip optional
   */
  getInfo(ip?: string){
    let urlService = 'http://ip-api.com/json/';
    let url;
    ip ? url = `${urlService}${ip}` : url = urlService;
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
