import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OverviewComponent } from './booking/overview/overview.component';
import { MyBookingErrorTemplateComponent } from './shared/components/my-booking-error-template/my-booking-error-template.component';
import { ArticlesComponent } from './shared/components/articles/articles.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'mybooking', component: MyBookingErrorTemplateComponent },
    { path: '**', component: PageNotFoundComponent }
];
