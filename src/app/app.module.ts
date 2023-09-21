import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FlowerComponent } from './components/flower/flower.component';
import { GifComponent } from './components/gif/gif.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowerComponent,
    GifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
