import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user.model';
import { MatPaginator } from '@angular/material/paginator';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';
import { filter } from 'rxjs/operators';
import { Reservation } from 'src/app/models/reservation.model';

interface UsersFilter{
  firstname: string;
  lastname: string;
  username: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  users!: MatTableDataSource<User>
  displayedColumns: string[] = ['Imię', 'Nazwisko', 'Email', 'Reserwacje', 'Admin']

  firstnameFilter!: string;
  lastnameFilter!: string;
  usernameFilter!: string;

  constructor(private userService: UsersService, public dialog: MatDialog) { }

  openDialog(id: string): void {
    var config = new MatDialogConfig();
    config.data = {
      id: id
    }
    this.dialog.open(UserComponent, config);
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe((result) => {

      this.users = new MatTableDataSource(result);
      this.users.paginator = this.paginator;

      this.users.filterPredicate = (data, filter) =>
      {
        var filters = JSON.parse(filter) as UsersFilter;
        return data.firstname.toLocaleLowerCase().startsWith(filters.firstname.toLocaleLowerCase()) &&
        data.lastname.toLocaleLowerCase().startsWith(filters.lastname.toLocaleLowerCase()) &&
        data.username.toLocaleLowerCase().startsWith(filters.username.toLocaleLowerCase());
      }
    });
  }

  applyFilter(){
    this.users.filter = JSON.stringify({
      firstname: this.firstnameFilter ? this.firstnameFilter : '',
      lastname: this.lastnameFilter ? this.lastnameFilter : '',
      username: this.usernameFilter ? this.usernameFilter : '',
    } as UsersFilter);
  }
}