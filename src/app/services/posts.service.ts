import { Injectable } from "@angular/core"; //to inject the dependencies
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class PostsService{
    constructor(private http: Http){
        console.log("Post service initialized.")
    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
    }
}