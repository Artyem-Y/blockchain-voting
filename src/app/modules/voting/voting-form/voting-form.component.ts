import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {Voting} from '@app/shared/models/voting';

@Component({
  selector: 'app-voting-form',
  templateUrl: './voting-form.component.html',
  styleUrls: ['./voting-form.component.scss']
})
export class VotingFormComponent implements OnInit {

  @Input() voting: Voting | any;
  @Input() isSubmitted: boolean;
  @Output() submitted = new EventEmitter;
  @Input() error;

  form = this.fb.group({
    title: [''],
    items: this.fb.group({
      votingItems: this.fb.array([this.initTask()]),
    })
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onSubmit() {

    const options = [];

    if (this.form.value.items && this.form.value.items.votingItems) {
      this.form.value.items.votingItems.forEach((option) => {
        options.push(option.votingItem)
      });
    }

    this.voting = {
      title: this.form.value.title,
      options: options
    };

    this.submitted.emit(this.voting);
  }

  initTask() {
    return this.fb.group({
      votingItem: ['', Validators.required]
    });
  }

  get tasksControl() {
    return this.form.get('items') as FormGroup;
  }

  get votingItemControl() {
    return this.tasksControl.get('votingItems') as FormArray;
  }

  addLink() {
    this.votingItemControl.push(this.initTask());
  }

  removeLink(i: number) {
    debugger;
    if (i !== 0)
      this.votingItemControl.removeAt(i);
  }
}
