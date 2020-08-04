import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegPostComponent } from './form-content/reg-post/reg-post.component';
import { HomeComponent } from './form-content/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: RegPostComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
