import { NewTrainingComponent } from './newTraining/newTraining.component';
import { TrainingComponent } from './training/training.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingStartedComponent } from './trainingStarted/trainingStarted.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
  },
  {
    path: 'new',
    component: NewTrainingComponent,
  },
  {
    path: ':id',
    component: TrainingStartedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
