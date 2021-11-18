import { Component, OnInit } from '@angular/core';
import { DataService, Post } from './data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostComponent implements OnInit {
  data: Post[] = [];
  columnsToDisplay = ['userId', 'id', 'title', 'body']
  myId: any
  person: Post[] = []
  searchTerm: string;

  constructor(private ds: DataService) {
  }

  displayJSON() {
    const stream2$ = new Observable(obs => {
      setTimeout(() => {
        obs.next(this.ds.fetch().subscribe(x => {
      this.data = x;
    }));
      }, 3000)
    })
    stream2$.subscribe({
      next(val) {
        return val;
      }
    })
  }
  
  ngOnInit(): void {
    this.displayLocalSrg()
    this.displayJSON()
  };

  displayLocalSrg() {
    const stream$ = new Observable(obs => {
      setTimeout(() => {
        obs.next(this.myId = localStorage.getItem('Users'));
        obs.next(this.person = JSON.parse(this.myId))
      }, 4000)
    })
    
    stream$.subscribe({
      next(val) {
        return val;
      }
    })
  }
}