import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from '../shared/components/delete/delete.component';
import { CommentsComponent } from './comments/comments.component';
import { CreateCommentsComponent } from './comments/create-comments/create-comments.component';
import { UpdateCommentsComponent } from './comments/update-comments/update-comments.component';
import { CreatePostComponent } from './posts/create/create.component';
import { PostsComponent } from './posts/posts.component';
import { UpdatePostsComponent } from './posts/update-posts/update-posts.component';

const routes: Routes = [
  
  {
    path:'posts/update/:id',
    component: UpdatePostsComponent
  },
  {
    path:'posts/delete/:postId',
    component: DeleteComponent
  },
  {
    path:'comments/delete/:postId/:commentId',
    component: DeleteComponent
  },
  {
    path:'posts/create',
    component: CreatePostComponent
  },
  {
    path:'posts',
    component: PostsComponent
  },
  {
    path:'comments/:postId',
    component: CommentsComponent
  },
  {
    path:'comments/:postId/create',
    component: CreateCommentsComponent
  },
  {
    path:'comments/update/:postId/:commentId',
    component: UpdateCommentsComponent
  },
  {
    path:'**',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
