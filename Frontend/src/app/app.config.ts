import { ApplicationConfig, provideZoneChangeDetection ,importProvidersFrom  } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration ,  BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; 
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()), provideAnimationsAsync(),
    importProvidersFrom(BrowserModule)
  ]
};
