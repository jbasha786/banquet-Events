import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { SelectedDatesComponent } from './booking/selected-dates/selected-dates.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'booking', component: BookingComponent },
    { path: 'selectDates', component: SelectedDatesComponent },
    { path: '**', component: PageNotFoundComponent }
];
