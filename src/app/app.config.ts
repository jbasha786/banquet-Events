import { ApplicationConfig, inject, isDevMode } from '@angular/core';
import { NavigationStart, provideRouter, Router, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideNativeDateAdapter } from '@angular/material/core';
import { errorHandlerInterceptor } from './_interceptors/error-handler.interceptor';
import { DatePipe } from '@angular/common';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './_store/reducers_config';
import { loadingInterceptor } from './_interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([errorHandlerInterceptor, loadingInterceptor]), withFetch()),
    provideNativeDateAdapter(),
    provideStore(reducers),
    provideStoreDevtools({ maxAge: 25, logOnly: true }),
    DatePipe, {
      provide: 'APP_INITIALIZER',
      useFactory: () => {
        return () => {
          const router = inject(Router);
          router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            }
          });
        };
      },
      multi: true
    }]
};
