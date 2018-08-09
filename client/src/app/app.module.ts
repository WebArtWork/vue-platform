import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchPipe } from './pipes/search.pipe';
import { ProfileComponent } from './pages/profile/profile.component';
import { PictureComponent } from './com/modal/picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    ProfileComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
