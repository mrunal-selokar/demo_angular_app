import { Component } from '@angular/core';
import { PostsService } from "../services/posts.service";
@Component({

  selector: 'user',
  templateUrl: 'user.component.html',
  providers:[PostsService]
})
export class UserComponent {
  title:string;
  name:string;
  email:string;
  address:address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];
  constructor(private postsService: PostsService){
      console.log('Constructor ran!');
        this.title = 'Welcome to the demo application!';
        this.name = 'Mrunal Selokar';
        this.email = 'mrunal_selokar@outlook.com';
        this.address = {
            plot: "26",
            area : 'Sarwashree nagar',
            street: 'Umred road',
            city: 'Nagpur',
            zip: '440024'
        }
        this.hobbies = ["drawing","doodling","music"];
        this.showHobbies = false;

        this.postsService.getPosts().subscribe(posts => {
           this.posts=posts;
        });
    }

    toggleHobbies(){
        if(this.showHobbies == true){
            this.showHobbies = false;
        }
        else{
            this.showHobbies = true;
        }
    }

    addHobby(hobby)
    {
        this.hobbies.push(hobby);
    }

    deleteHobby(i){
        this.hobbies.splice(i,1);
    }
}
interface address{
    plot:string;
    area:string;
    street: string;
    city: string;
    zip:string;
}

interface Post{
    id:number;
    title:string;
    body:string;
}
