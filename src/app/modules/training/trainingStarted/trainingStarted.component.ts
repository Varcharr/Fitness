import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../services/training.service';

@Component({
  selector: 'app-trainingStarted',
  templateUrl: './trainingStarted.component.html',
  styleUrls: ['./trainingStarted.component.css'],
})
export class TrainingStartedComponent implements OnInit {
  constructor(private trainingService: TrainingService) {}
  timeLeft: number = 60;
  interval;
  isRunning: boolean = false;
  training;

  ngOnInit() {
    this.fetchTraining(2);
  }

  start() {
    this.isRunning = true;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000);
  }
  pause() {
    clearInterval(this.interval);
    this.isRunning = false;
  }

  fetchTraining(id) {
    this.training = this.trainingService.fetchTraining(id);
    console.log(this.training);
  }
}
