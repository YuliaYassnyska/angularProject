import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

@Injectable({ providedIn: 'root' })

export class DataService {
    url: string = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) {}

    getData(): Observable<Post[]>{
        return this.http.get<Post[]>(this.url);
    }
}
