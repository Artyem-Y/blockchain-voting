import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-voting-list',
  templateUrl: './voting-list.component.html',
  styleUrls: ['./voting-list.component.css']
})
export class VotingListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addNewVoting = () => {
    this.router.navigate(['/voting/create']);
  }

  goToVoting = () => {
    this.router.navigate(['/voting/:id']);
  }

}
