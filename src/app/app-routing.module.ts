import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CalculateComponent } from './calculate/calculate.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: 'calculate/:id', component: CalculateComponent},
{path:'', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
