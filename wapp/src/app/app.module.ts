import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
// import { CarouselModule } from 'angular4-carousel';
import { CarouselModule } from 'ngx-bootstrap';
import { AchievementsComponent } from './achievements/achievements.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    GalleryComponent,
    HomeComponent,
    FooterComponent,
    OurProjectsComponent,
    AchievementsComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    
    // CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
