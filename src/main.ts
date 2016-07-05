import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { enableProdMode, provide } from '@angular/core';
import { AppComponent, environment } from './app/';
import { JSONP_PROVIDERS }  from '@angular/http';
if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ HTTP_PROVIDERS, JSONP_PROVIDERS, provide(Window, {useValue: window})]);

