import { Component, OnChanges, Input} from '@angular/core';
import { IpInfo } from './ipinfo.model';
@Component({
  moduleId: module.id,
  selector: 'ip-info',
  templateUrl: 'ipinfo.component.html',
  styleUrls: ['ipinfo.component.css']
})
export class IpinfoComponent implements OnChanges{
  @Input() ipInfo: IpInfo;
  constructor(private window: Window) {
  }

  ngOnChanges(changes: any) {
    this.setMap(this.ipInfo.lat, this.ipInfo.lon);
  }
  /**
   * Draw map when change ipInfo
   */
  private setMap(lat: Number, lon: Number){
    setTimeout(function(){ 
       let map = new this.window.google.maps.Map(document.getElementById('map'), {
              center: {lat: lat, lng: lon},
              zoom: 8
            });
    }, 1000);
  }
}
