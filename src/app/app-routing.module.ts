import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {AuthGuardService} from '@app/shared/services/auth-guard.service';
import {VotingRoutingModule} from '@app/modules/voting/voting-routing.module';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {enableTracing: false}),
    VotingRoutingModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
