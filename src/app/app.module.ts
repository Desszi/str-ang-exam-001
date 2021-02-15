import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { HomeComponent } from './common/home/home.component';
import { HeroesComponent } from './common/heroes/heroes.component';
import { RouterModule } from '@angular/router';
import { HeroSearchPipe } from './pipes/hero-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    HeroesComponent,
    HeroSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
