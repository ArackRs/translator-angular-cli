import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppComponent } from './app.component';
import { NavbarComponent } from './public/components/navbar/navbar.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FooterComponent } from "./public/components/footer/footer.component";
import { HomeComponent } from "./public/pages/home/home.component";
import { NotFoundComponent } from "./public/pages/not-found/not-found.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslatorComponent } from './public/components/translator/translator.component';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    TranslatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en', loader: {
        provide: TranslateLoader, useFactory: (createTranslateLoader), deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
