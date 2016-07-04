import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { JSONP_PROVIDERS }  from '@angular/http';

import { IpinfoService } from './ipinfo/ipinfo.service';
import { IpInfo } from './ipinfo/ipinfo.model';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [JSONP_PROVIDERS, IpinfoService]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  ipInfo: IpInfo;
  constructor(private ipInfoService: IpinfoService){}
  ngOnInit(){
    this.ipInfoService.getInfo()
          .subscribe(
            info => IpInfo,
            err => console.log(err),
            () => console.log('yay'));
  }
}
