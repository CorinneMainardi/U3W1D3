import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { ActivePostsComponent } from './pages/active-posts/active-posts.component';
import { NavbarComponent } from './main-components/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    HomeComponent,
    PostDetailComponent,
    ActivePostsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
