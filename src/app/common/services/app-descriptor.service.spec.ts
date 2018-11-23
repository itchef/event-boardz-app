import {async, inject, TestBed} from '@angular/core/testing';

import { AppDescriptorService } from './app-descriptor.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
const faker = require('faker');

describe('AppDescriptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      AppDescriptorService
    ]
  }));

  afterEach(inject([HttpTestingController], (backend: HttpTestingController) => {
    backend.verify();
  }));

  it(`should emit 'true' for 200 Ok`, async(inject([AppDescriptorService, HttpTestingController],
    (service: AppDescriptorService, backend: HttpTestingController) => {
      const config = {
        name: 'Event Boardz app',
        redirectUrl: '/',
        companyLogo: faker.random.image()
      };
      service.getAppConfig().subscribe((response) => {
        expect(response.name).toBe('Event Boardz app');
        expect(response.redirectUrl).toBe('/');
        expect(response.companyLogo).toBe(config.companyLogo);
      });

      backend.expectOne('config/app/app.json').flush(config, { status: 200, statusText: 'Ok' });
    })));
});
