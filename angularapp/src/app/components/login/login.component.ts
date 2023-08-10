import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private returnUrl!: string;
  email!: string;
  password!: string;

  loginForm!: FormGroup;
  errorMessage: string = '';
  showError!: boolean;

  constructor(private router: Router, private userService: UsersService,) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    });
  }
  
  validateControl = (controlName: string) => {
    return this.loginForm.get(controlName)?.invalid && this.loginForm.get(controlName)?.touched;
  }

  hasError = (controlName: string, errorName: string) => {
    return this.loginForm.get(controlName)?.hasError(errorName)
  }
  
  public loginUser() {
    this.userService.auth({
      username: this.email,
      password: this.password,
    } as unknown as User).subscribe(result => {
        console.log(result);
        if(result.validationMessages.length > 0){
          console.log('Niepoprawny email lub hasło');
          return;
        }
        else{
          console.log('Zalogowano poprawnie!');
          this.userService.saveUser(result.data);
          this.userService.saveToken(result.token);
          if(this.currentUser && this.currentUser.isAdmin == true)
            this.router.navigate(['admin-panel'])
          else
            this.router.navigate(['movies'])
        }
    })
  }
  
  get currentUser(): User | undefined {
    return this.userService.user;
   }
}