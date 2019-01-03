import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '@app/shared/services/auth-guard.service';
import {VotingListComponent} from '@app/modules/voting/voting-list/voting-list.component';
import {VotingCreateComponent} from '@app/modules/voting/voting-create/voting-create.component';
import { VotingItemComponent } from './voting-item/voting-item.component';


const VotingRoutes: Routes = <Routes>[
  {
    path: 'voting',
    // canActivateChild: [AuthGuardService],
    children: [
      {
        path: '',
        component: VotingListComponent,
      },
      {
        path: 'create',
        component: VotingCreateComponent,
      },
      {
        path: ':id',
        component: VotingItemComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(VotingRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class VotingRoutingModule {
}
