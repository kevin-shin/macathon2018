import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SetupGoalPage } from './setup-goal.page';
import {RoundProgressModule} from 'angular-svg-round-progressbar';


const routes: Routes = [
  {
    path: '',
    component: SetupGoalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoundProgressModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SetupGoalPage]
})
export class SetupGoalPageModule {}
