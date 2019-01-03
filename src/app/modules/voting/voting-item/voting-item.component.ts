import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-voting-item',
  templateUrl: './voting-item.component.html',
  styleUrls: ['./voting-item.component.scss']
})
export class VotingItemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  makeVoting = (item) => {
  }

  cancel = () => {
    this.router.navigate(['/voting']);
  }

}
