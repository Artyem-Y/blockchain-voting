import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


// Custom modules
import {AppRoutingModule} from '@app/app-routing.module';
import {VotingModule} from '@app/modules/voting/voting.module';

// Custom components
import {AppComponent} from './app.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    VotingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
