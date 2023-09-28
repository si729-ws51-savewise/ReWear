import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { firebaseProviders } from "./firebase.config";
import { routes } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from "@angular/router";
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

const NO_NG_MODULES= importProvidersFrom([BrowserAnimationsModule]);

export const appConfig : ApplicationConfig = {
    providers: [provideRouter(routes), 
        firebaseProviders,
        NO_NG_MODULES,
    {   
        provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: {
            appearance: 'outline',
            color: 'accent',
        },
    },
    ],   
};
