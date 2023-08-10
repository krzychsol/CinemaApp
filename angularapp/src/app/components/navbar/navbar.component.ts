import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private userService: UsersService, private router: Router){}
  
  title: string = "CinemaApp";
  logoUrl: string = "../../../assets/img/logo.png";

  onLogout(){
    this.userService.logout();
    this.router.navigate(['login'])
  }

  ngOnInit(): void {
    this.userService.getUser();
  }

  get currentUser(): User | undefined {
    return this.userService.user;
  }
}
