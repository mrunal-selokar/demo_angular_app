import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: 'user.component.html'
})
export class UserComponent {
  title:string;
  name:string;
  email:string;
  address:address;
  hobbies: string[];
  showHobbies: boolean;
  constructor(){
      console.log('Constructor ran!');
        this.title = 'Welcome to the demo application!';
        this.name = 'Mrunal Selokar';
        this.email = 'mrunal_selokar@outlook.com';
        this.address = {
            plot: "26",
            area : 'Sarwashree nagar',
            street: 'Umred roas',
            city: 'Nagpur',
            zip: '440024'
        }
        this.hobbies = ["drawing","doodling","music"];
        this.showHobbies = false;
    }

    toggleHobbies(){
        if(this.showHobbies == true){
            this.showHobbies = false;
        }
        else{
            this.showHobbies = true;
        }
    }
}
interface address{
    plot:string;
    area:string;
    street: string;
    city: string;
    zip:string;
}
