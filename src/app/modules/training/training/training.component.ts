import { TrainingService } from './../services/training.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements OnInit {
  constructor(private trainingService: TrainingService) {}
  workouts: any;
  ngOnInit() {
    this.workouts = this.trainingService.fetchTrainings();
  }
  removeWorkout(event) {}
}
