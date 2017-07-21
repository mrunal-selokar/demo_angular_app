import { Component } from '@angular/core';

@Component({
  selector: 'user',
  templateUrl: 'user.component.html'
})
export class UserComponent {
  title = 'Welcome to the demo application!';
  name = 'Mrunal Selokar';
  email = 'mrunal_selokar@outlook.com';
  address = {
    plot: "26",
    area : 'Sarwashree nagar',
    street: 'Umred roas',
    city: 'Nagpur',
    zip: '440024'
  }
  constructor(){
      console.log('Constructor ran!');
  }

}
