import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CommentsComponent } from './comments/comments.component';
import { CreateCommentsComponent } from './comments/create-comments/create-comments.component';
import { UpdateCommentsComponent } from './comments/update-comments/update-comments.component';
import { CreatePostComponent } from './posts/create/create.component';
import { PostsComponent } from './posts/posts.component';
import { UpdatePostsComponent } from './posts/update-posts/update-posts.component';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    CommentsComponent,
    CreateCommentsComponent,
    UpdateCommentsComponent,
    PostsComponent,
    CreatePostComponent,
    UpdatePostsComponent
],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
