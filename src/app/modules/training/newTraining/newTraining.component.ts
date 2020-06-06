import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-newTraining',
  templateUrl: './newTraining.component.html',
  styleUrls: ['./newTraining.component.css'],
})
export class NewTrainingComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  workoutForm = this.fb.group({
    name: [null, [Validators.required]],
    calories: [null],
    time: [null, [Validators.required]],
    username: [null, [Validators.required]],
    password: [null, [Validators.required, Validators.minLength(6)]],
    exercises: [null, [Validators.required]],
  });
  ngOnInit() {}

  createWorkout() {}
}
