import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HomepageComponent } from './homepage/homepage.component'

export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

import { HttpClientModule } from "@angular/common/http";
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarRatingModule } from 'angular-star-rating';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { FilterPipe } from './homepage/filter.pip';
import { AddMovieComponent } from './admin/add-movie/add-movie.component';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    MovieDetailsComponent,
    HeaderBarComponent,
    TicketBookingComponent,
    FilterPipe,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxMaskModule.forRoot(),
    StarRatingModule.forRoot(),
  ],
  providers: [FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
