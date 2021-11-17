import { Injectable } from "@angular/core";
import { Post } from "../posts/data.service";

@Injectable({
    providedIn: "root"
})

export class FormUserService{
    constructor() {}

    addUsers(user: Post){
        let users: any[] = [];
        if (localStorage.getItem('Users')) {
            users = JSON.parse(localStorage.getItem('Users') as string);
            users = [...users, user];
        }
        else {
            users = [user];
        }
        localStorage.setItem('Users', JSON.stringify(users));
    }
}