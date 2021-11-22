import { Component, OnInit } from '@angular/core';
import { DataService, Post } from './data.service';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostComponent implements OnInit {
  data: Post[] = [];
  columnsToDisplay = ['userId', 'id', 'title', 'body'];
  myId: any;
  person: Post[] = [];
  searchTerm: string;
  public search2 = new BehaviorSubject<string>("");
  public subject2 = new ReplaySubject();

  constructor(private ds: DataService, private router: Router) {
  }

  displayJSON() {
    const stream2$ = new Observable(obs => {
      setTimeout(() => {
        obs.next(this.ds.resolve().subscribe(x => {
      this.data = x;
    }));
      }, 1000)
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
      }, 1500)
    })
      
    stream$.subscribe({
      next(val) {
        return val;
      }
    })
  }
            
  onClick(id: number) {
    this.router.navigate(['/post', id])
    this.ds.subject.next(this.data[id - 1])
    // this.ds.subject.next(this.person[id - 1])
  }
  onClickLocal(id: number) {
    this.router.navigate(['/post', id])
    this.ds.subject.next(this.person[id - 1])
  }
}