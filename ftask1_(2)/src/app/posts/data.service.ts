import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

@Injectable({ providedIn: 'root' })
export class DataService implements Resolve<Post[]> {
    url: string = 'https://jsonplaceholder.typicode.com/posts';
    public search = new BehaviorSubject<string>("");
    public subject = new ReplaySubject();

    constructor(private http: HttpClient) {
    }

    resolve(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): Observable<Post[]> {
        return this.http.get<Post[]>(this.url);
    }
}
