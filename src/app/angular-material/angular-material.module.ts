import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from "@angular/material/core";


@NgModule({
    imports: [
        MatCardModule,
        MatTabsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatDatepickerModule,
    ],
    exports: [
        MatCardModule,
        MatTabsModule,
        MatInputModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatDatepickerModule,
    ],
    providers: [provideNativeDateAdapter()],
})
export class AngularMaterialModule { }