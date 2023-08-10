import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { MovieTileComponent } from './components/movie-tile/movie-tile.component';
import { BookingMovieComponent } from './components/booking-movie/booking-movie.component';
import { UserpanelComponent } from './components/userpanel/userpanel.component';
import { SeatsPickerComponent } from './components/seats-picker/seats-picker.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmComponent } from './components/confirm/confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SeancesComponent } from './components/seances/seances.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomepageComponent,
    MoviesListComponent,
    AddMovieComponent,
    MovieTileComponent,
    BookingMovieComponent,
    UserpanelComponent,
    SeatsPickerComponent,
    ConfirmComponent,
    SeancesComponent,
    AdminPanelComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
