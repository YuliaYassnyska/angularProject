import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { DataInterceptor } from './data-interceptor';

export const HttpInterceptProvides = [{
    provide: HTTP_INTERCEPTORS, useClass: DataInterceptor, multi: true
}]