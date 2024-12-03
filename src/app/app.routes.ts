import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverviewComponent } from './booking/overview/overview.component';
import { MyBookingErrorTemplateComponent } from './shared/components/my-booking-error-template/my-booking-error-template.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { InvoiceHistoryComponent } from './invoice-history/invoice-history.component';
import { SignupComponent } from './core/signup/signup.component';
import { EventsComponent } from './events/events.component';
import { MenuComponent } from './shared/components/menu/menu.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'mybooking', component: BookingHistoryComponent },
    { path: 'signUp', component: SignupComponent },
    { path: 'events', component: EventsComponent },
    { path: 'menu', component: MenuComponent},
    { path: '**', component: PageNotFoundComponent }
];
