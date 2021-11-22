import { Component, OnInit } from '@angular/core';
import { DataService, Post } from './data.service';
import { PostComponent } from './posts.component';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  data: any;
  person: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.subject.subscribe({
      next: (v) => this.data = v
    })
  } 

}