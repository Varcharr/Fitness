import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training/training.component';
import { NewTrainingComponent } from './newTraining/newTraining.component';
import { TrainingRoutingModule } from './training-routing.module';
import { TrainingService } from './services/training.service';

@NgModule({
  imports: [CommonModule, TrainingRoutingModule, SharedModule],
  declarations: [TrainingComponent, NewTrainingComponent],
  providers: [TrainingService],
})
export class TrainingModule {}
