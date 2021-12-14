import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FilmDetailsComponent } from './pages/film-details/film-details.component';
import { FilmSubmissionsComponent } from './pages/film-submissions/film-submissions.component';
import { HeaderComponent } from './components/header/header.component';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { GoogleMapsModule } from '@angular/google-maps';
// MDB Angular Pro
import { ButtonsModule, WavesModule, DropdownModule } from 'angular-bootstrap-md';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TableComponent } from './components/table/table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { ResizeColumnDirective } from '../app/directives/resize-column.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilmDetailsComponent,
    FilmSubmissionsComponent,
    HeaderComponent,
    SideNavComponent,
    TableComponent,
    ResizeColumnDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MdbTabsModule,
    GoogleMapsModule,
    ButtonsModule,
    WavesModule,
    MatFormFieldModule,
    MatSelectModule,
    MDBBootstrapModule.forRoot(),
    DropdownModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
