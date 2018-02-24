import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location} from '@angular/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {


post: any={};

constructor(private postService: PostService, private route: ActivatedRoute, private location: Location) { 
}

ngOnInit(): void {
  this.getPost();
}

getPost(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.postService.getPostDetails(id)
    .subscribe(post => this.post = post);
}

goBack(): void{
  this.location.back();
}
}