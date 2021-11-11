import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './posts/data.service';
import { HttpInterceptProvides } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService, HttpInterceptProvides],
  bootstrap: [AppComponent]
})
export class AppModule { }
