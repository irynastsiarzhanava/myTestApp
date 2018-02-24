import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import { UserService} from '../_services/user.service';
import { PostService } from '../_services/post.service';
import { ReversePipe} from '../_pipes/reverse.pipe';
import { FilterPipe} from '../_pipes/filter.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

data : any=[];
post: any={};
searchableList: any =[];

  constructor(private postService:PostService, private router: Router) {    
} 

  ngOnInit() {
    
    this.postService.getPosts().subscribe(posts => {
           this.data = posts;
        });

    this.searchableList = ['id','title', 'body'] ;
  }

  viewDetails(id){
    this.postService.getPostDetails(id).subscribe(post => {
      this.post = post;
    });
    this.router.navigate(['posts', id]);
  }


}