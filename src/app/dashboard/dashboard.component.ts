import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForOf } from '@angular/common';
import { ModalContentComponent} from '../modal-content/modal-content.component'
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
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
  errorMessage : any=[];
  bsModalRef: BsModalRef;

  constructor(private postService:PostService, private router: Router, private modalService: BsModalService) {
  } 

  ngOnInit() {
    
    this.postService.getPosts().subscribe(
          posts => {this.data = posts;},
          error => {
            this.errorMessage = error; 
            this.bsModalRef = this.modalService.show(ModalContentComponent);
            this.bsModalRef.content.errorMessage = this.errorMessage;
          });
    this.searchableList = ['id','title', 'body'] ;
    
  }

  viewDetails(id) {
    this.postService.getPostDetails(id).subscribe(
          post => {this.post = post;},
          error => {
            this.errorMessage = error; 
            this.bsModalRef = this.modalService.show(ModalContentComponent);
            this.bsModalRef.content.errorMessage = this.errorMessage;
          });
    this.router.navigate(['posts', id]);
  }

}