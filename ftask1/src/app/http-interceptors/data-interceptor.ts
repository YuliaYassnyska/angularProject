import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) {

        const head = 'application/json'
        const postsReq = request.clone({
            setHeaders: { 'Content-Type': head}
        })
        return next.handle(postsReq)
    }
}