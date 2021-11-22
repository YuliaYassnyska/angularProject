import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './posts/post-details.component';
import { PostComponent } from './posts/posts.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'cards',
    component: PostComponent
  },
  {
    path: 'post/:id',
    component: PostDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  

})
export class AppRoutingModule { }
