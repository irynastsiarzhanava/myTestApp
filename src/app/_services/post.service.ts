import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    id: any;

    constructor(private http: HttpClient) {
    }

    getPosts() {
        return this.http.get(this.apiUrl, {params: {userId: '1'}});
    }


      getPostDetails(id) {
        return this.http.get(this.apiUrl+'/'+id, {params: {userId: '1'}});
      }


}
