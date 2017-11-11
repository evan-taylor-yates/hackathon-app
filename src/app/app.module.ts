import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';


import { AppComponent } from './app.component';
import { TimelineComponent } from './footer/timeline/timeline.component';
import { Memory } from './footer/timeline/memory.service';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    FooterComponent,
    SidebarComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [Memory],
  bootstrap: [AppComponent]
})
export class AppModule {}


