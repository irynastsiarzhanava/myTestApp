import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { PostService } from '../_services/post.service';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

data : any=[];
post: any={};
postId: any;
id: any;

constructor(private router: Router, private detailsService: PostService, private dataService:DataService, private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.dataService.currentId.subscribe(post=> this.postId = post['id']);     

    this.detailsService.getPostDetails(this.postId).subscribe(post => {
            this.post = post;
            console.log(post);
            this.postId = post['id'];
            console.log(this.postId);
          });
}



goBack() {
      this.router.navigate(['dashboard']);
    }
}