import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { BookingMovieComponent } from './components/booking-movie/booking-movie.component';
import { UserpanelComponent } from './components/userpanel/userpanel.component';
import { AuthGuard } from './shared/auth.guard';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'booking-movie', component: BookingMovieComponent, canActivate: [AuthGuard]},
  { path: 'movies', component: MoviesListComponent},
  { path: 'add-movie', component: AddMovieComponent, canActivate: [AuthGuard]},
  { path: 'user-profile/:id', component: UserpanelComponent, canActivate: [AuthGuard]},
  { path: 'admin-panel', component: AdminPanelComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  { path: '', component: HomepageComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
