import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverviewComponent } from './booking/overview/overview.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { SignupComponent } from './core/signup/signup.component';
import { LoginComponent } from './core/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'mybooking', component: BookingHistoryComponent },
    { path: 'signUp', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
];
