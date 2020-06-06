import { NewTrainingComponent } from './newTraining/newTraining.component';
import { TrainingComponent } from './training/training.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TrainingComponent,
  },
  {
    path: 'new',
    component: NewTrainingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingRoutingModule {}
