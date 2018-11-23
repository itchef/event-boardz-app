import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {MatToolbarModule} from '@angular/material';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppDescriptorService} from '../common/services/app-descriptor.service';
import {Observable} from 'rxjs';
const faker = require('faker');

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        MatToolbarModule,
        HttpClientTestingModule
      ],
      providers: [ AppDescriptorService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize appConfig with required data', fakeAsync(() => {
    const config = {
      name: 'Event Boardz app',
      redirectUrl: '/',
      companyLogo: faker.random.image()
    };
    const appConfigResponse = new Observable(observer => {
      observer.next(config);
      observer.complete();
    });
    const _appDescriptorService = fixture.debugElement.injector.get(AppDescriptorService);
    spyOn(_appDescriptorService, 'getAppConfig').and.returnValue(appConfigResponse);
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(component.appConfig.name).toBe('Event Boardz app');
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').getAttribute('src')).toBe(config.companyLogo);
    expect(compiled.querySelector('img').getAttribute('alt')).toBe(config.name);
    expect(compiled.querySelector('a').getAttribute('href')).toBe(config.redirectUrl);
  }));
});
