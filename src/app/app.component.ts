import { Component, OnInit } from '@angular/core';

import { IpinfoService } from './ipinfo/ipinfo.service';
import { IpInfo } from './ipinfo/ipinfo.model';
import { IpinfoComponent } from './ipinfo/ipinfo.component';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [IpinfoService],
  directives: [IpinfoComponent]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  ipInfo: IpInfo;
  ip: string;
  ipForm: {};
  constructor(private ipInfoService: IpinfoService){}
  ngOnInit(){
    this.getIpInfo();
  }
  /**
   * Form Submit
   */
  onSubmit(){
    this.getIpInfo(this.ip);
  }
  /**
   * Get IpInfo from service (ip optional)
   */
  private getIpInfo(ip?: string) {
    this.ipInfoService.getInfo(ip)
          .subscribe(
            info => this.ipInfo = info,
            err => this.handleError(err));
  }
  private handleError(err: any) {
    console.log(err);
  }
}
