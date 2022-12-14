import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'project-list', component: ProjectListComponent},
  {path: '', redirectTo: '/home-page', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
