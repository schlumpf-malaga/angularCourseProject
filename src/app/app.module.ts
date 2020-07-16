import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { stubServiceProviders } from '@core/providers/stubService.provider';
import { AppFooterModule } from '@shared/components/footer/footer.module';
import { AppHeaderModule } from '@shared/components/header/header.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

registerLocaleData(localeDe, localeDeExtra);

@NgModule({
	declarations: [AppComponent],
	imports: [AppFooterModule, AppHeaderModule, AppRoutingModule, BrowserModule, HttpClientModule],
	providers: [...stubServiceProviders, { provide: LOCALE_ID, useValue: 'de' }],
	bootstrap: [AppComponent],
})
export class AppModule {}
