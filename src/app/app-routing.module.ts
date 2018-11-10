import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'setupPair', pathMatch: 'full' },
  { path: 'login', loadChildren: '../pages/login/login.module#LoginPageModule' },
  { path: 'setupInfo', loadChildren: '../pages/setup-info/setup-info.module#SetupInfoPageModule' },
  { path: 'setupGoal', loadChildren: '../pages/setup-goal/setup-goal.module#SetupGoalPageModule' },
  { path: 'setupPair', loadChildren: '../pages/setup-pair/setup-pair.module#SetupPairPageModule' },
  { path: 'setupColor', loadChildren: '../pages/setup-color/setup-color.module#SetupColorPageModule' },
  { path: 'home', loadChildren: '../pages/home/home.module#HomePageModule' },
  { path: 'stats', loadChildren: '../pages/stats/stats.module#StatsPageModule' },
  { path: 'settings', loadChildren: '../pages/settings/settings.module#SettingsPageModule' },
  { path: 'account', loadChildren: '../pages/account/account.module#AccountPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
