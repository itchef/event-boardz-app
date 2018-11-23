import { Component, OnInit } from '@angular/core';
import {AppDescriptorService} from '../common/services/app-descriptor.service';

@Component({
  selector: 'eb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ AppDescriptorService ]
})
export class HeaderComponent implements OnInit {
  appConfig: any;
  constructor(private _appDescriptor: AppDescriptorService) { }

  ngOnInit() {
    this._appDescriptor.getAppConfig().subscribe(appConfig => {
      this.appConfig = appConfig;
    });
  }

}
