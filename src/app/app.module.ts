import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app/app.component';
import {AppRoutingModule} from './app-routing.module';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './core/header/header.component';
import {PipesModule} from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
