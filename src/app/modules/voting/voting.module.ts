import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '@app/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {VotingListComponent} from './voting-list/voting-list.component';
import { VotingCreateComponent } from './voting-create/voting-create.component';
import { VotingItemComponent } from './voting-item/voting-item.component';
import { VotingFormComponent } from './voting-form/voting-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [VotingListComponent, VotingCreateComponent, VotingItemComponent, VotingFormComponent]
})
export class VotingModule {
}
