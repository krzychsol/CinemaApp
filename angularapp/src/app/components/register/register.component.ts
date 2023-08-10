import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  regForm!: FormGroup;
  errorMessage: string = '';
  showError!: boolean;

  id!: number;
  firstname!: string;
  lastname!: string;
  username!: string;
  password!: string;
  isAdmin!: boolean;
  reservations = [];

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.regForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),  
    });
  }

  public validateControl = (controlName: string) => {
    return this.regForm.get(controlName)?.invalid && this.regForm.get(controlName)?.touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.regForm.get(controlName)?.hasError(errorName)
  }

  public registerUser() {
    this.userService.register({
      id: this.id,
      firstname: this.firstname,
      lastname: this.lastname,
      username: this.username,
      password: this.password,
      isAdmin: false,
      reservations: [],

    } as User).subscribe(result => {
      result.data as User,
      console.log('Twoje konto zostało utworzone!');
      this.userService.saveUser(result.data),
      this.userService.saveToken(result.token),
      this.router.navigate(['users']),
      console.log("TOKEN: " + result.token + "USER: " + result.data)
    })
  }
}
