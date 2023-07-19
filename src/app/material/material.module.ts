import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_AUTOCOMPLETE_SCROLL_STRATEGY, MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports:[
    MatSelectModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    ScrollingModule,
    MatMenuModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  providers:[
  {provide: MAT_SELECT_SCROLL_STRATEGY, useValue: MAT_SELECT_SCROLL_STRATEGY_PROVIDER},
  {provide: MAT_AUTOCOMPLETE_SCROLL_STRATEGY, useValue: MAT_SELECT_SCROLL_STRATEGY_PROVIDER},
  ]
})

export class MaterialModule { }
