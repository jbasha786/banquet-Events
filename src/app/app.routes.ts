import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverviewComponent } from './booking/overview/overview.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { SignupComponent } from './core/signup/signup.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './core/login/login.component';
import { ForgotPasswordComponent } from './core/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './core/reset-password/reset-password.component';
import { LiveEventsComponent } from './live-events/live-events.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'mybooking', component: BookingHistoryComponent },
    { path: 'signUp', component: SignupComponent },
    { path: 'events', component: EventsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'resetpwd', component: ResetPasswordComponent },
    { path: 'forgotpwd', component: ForgotPasswordComponent },
    { path: 'liveEvents', component: LiveEventsComponent },
    { path: '**', component: PageNotFoundComponent },
];
