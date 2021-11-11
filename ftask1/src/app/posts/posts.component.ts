import { Component, OnInit } from '@angular/core';
import { DataService, Post } from './data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostComponent implements OnInit{
  showImage: boolean;
  data: Post[] = [];
  columnsToDisplay = ['userId', 'id', 'title', 'body']

  constructor(private ds: DataService) {
    this.showImage = false;
    this.ds.fetch().subscribe(x => {
      this.data = x;
      console.log(this.data)
    })
  }
  ngOnInit(): void {};
}