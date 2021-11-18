import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './posts/posts.component';
import { DataService } from './posts/data.service';
import { HttpInterceptProvides } from './http-interceptors';
import { FormComponent } from './form/form.component';
import { FormUserService } from './form/form.service';
import { FormFilterPipe } from './posts/form-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FormComponent,
    FormFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService, HttpInterceptProvides, FormUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
