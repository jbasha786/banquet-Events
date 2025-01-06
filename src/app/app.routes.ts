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
import { BusinessLandingPageComponent } from './business-landing-page/business-landing-page.component';
import { ListOfHallsComponent } from './booking/list-of-halls/list-of-halls.component';
import { LiveEventsComponent } from './live-events/live-events.component';
import { WeddingPageComponent } from './wedding-page/wedding-page.component';
import { ContinueGuestComponent } from './core/continue-guest/continue-guest.component';
import { WelcomeGuestsComponent } from './welcome-guests/welcome-guests.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

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
    { path: 'business', component: BusinessLandingPageComponent },
    { path: 'hallsList', component: ListOfHallsComponent },
    { path: 'liveEvents', component: LiveEventsComponent },
    { path: 'wedding', component: WeddingPageComponent },
    { path: 'bokkingDetails', component: BookingDetailsComponent },
    { path: 'continueasguest', component: ContinueGuestComponent },
    { path: 'planner', loadComponent:() =>  import("./planner/planner.component").then(c => c.PlannerComponent)},
    { path: 'welcomeguests', component: WelcomeGuestsComponent },
    { path: '**', component: PageNotFoundComponent }
];
