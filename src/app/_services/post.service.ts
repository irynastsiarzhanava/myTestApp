import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, retry} from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/observable/throw';

@Injectable()
export class PostService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    id: any;
    error : any=[];


    private handleError(error: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (error.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${error.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
        }
        return Observable.throw(errorMessage || 'Something bad happened; please try again later.');
    }

    constructor(private http: HttpClient) {
    }

    getPosts() {
        return this.http.get(this.apiUrl, {params: {userId: '1'}})
            .pipe(
              retry(3),
              catchError(this.handleError)
            );
    }


    getPostDetails(id) {
        return this.http.get(this.apiUrl+'/'+id, {params: {userId: '1'}})
            .pipe(
              retry(3),
              catchError(this.handleError)
            );
      }
}
