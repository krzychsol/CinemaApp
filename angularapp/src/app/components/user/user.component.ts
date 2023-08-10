import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  id: number;
  user!: User;

  users!: MatTableDataSource<User>;
  displayedColumns: string[] = ['properties', 'data']

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService,
    public dialogRef: MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) data:any) {
      this.id = Number(data.id);
     }

  get selectedUser(): User {
    return this.user;
  }

  onEditClick(){
    this.dialogRef.close();
    this.router.navigate(['user-edit/' + this.selectedUser.id])
  }

  onCancelClick(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.userService.getById(this.id).subscribe((result) => {
      this.user = result;
    });
  }
}
