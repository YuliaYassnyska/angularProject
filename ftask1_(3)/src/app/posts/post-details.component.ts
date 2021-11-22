import { Component, OnInit } from '@angular/core';
import { DataService} from './data.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  data: any
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.subject.subscribe({
      next: (v) => this.data = v
    })
  }
  

}
