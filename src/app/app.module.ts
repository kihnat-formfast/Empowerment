import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TopicRoomComponent } from './topic-room/topic-room.component';
import { UserManagementComponent } from './user-management/user-management.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'manage', component: UserManagementComponent },
  { path: 'room', component: TopicRoomComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopicRoomComponent,
    UserManagementComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
