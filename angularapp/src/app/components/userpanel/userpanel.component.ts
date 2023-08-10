import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit{
  
  constructor(
    public userService: UsersService,
    private router: Router
  ) {
    
  }
  
  // onEditClick(){
  //   this.router.navigate(['user-edit/' + this.currentUser.id])
  // }

  ngOnInit(): void {
    if(this.userService.user){
      this.userService.getById(this.userService.user.id).subscribe(result => {
        //this.currentUser = result;
        console.log(result)
      });
    }
  }

  get currentUser(): User | undefined {
    return this.userService.user;
   }
}
