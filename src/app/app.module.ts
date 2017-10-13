import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './header/main-nav/main-nav.component';
import { HeroComponent } from './hero/hero.component';
import { KnowlodgesComponent } from './knowlodges/knowlodges.component';
import { TestemonialComponent } from './testemonial/testemonial.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { AboutContactComponent } from './about-contact/about-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    MainNavComponent,
    HeroComponent,
    KnowlodgesComponent,
    TestemonialComponent,
    WorksComponent,
    ContactComponent,
    AboutContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
