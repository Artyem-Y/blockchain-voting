import { Component, OnInit } from '@angular/core';
import {Voting} from '@app/shared/models/voting';

@Component({
  selector: 'app-voting-create',
  templateUrl: './voting-create.component.html',
  styleUrls: ['./voting-create.component.scss']
})
export class VotingCreateComponent implements OnInit {

  constructor() { }

  public voting: Voting = new Voting();
  error: any = null;
  errorMessage: any = null;
  isSubmitted = false;

  ngOnInit() {
  }

  onSubmit = (voting: Voting) => {

  }


}
