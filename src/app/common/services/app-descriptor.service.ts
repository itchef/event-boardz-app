import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDescriptorService {

  constructor(private _httpClient: HttpClient) { }

  getAppConfig(): Observable<any> {
    return this._httpClient.get('config/app/app.json');
  }
}
