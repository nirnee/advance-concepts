import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BotService } from '../admin/services/bot.service';

import { SharedModule } from '../shared/shared.module';
import { CommentsComponent } from './comments/comments.component';
import { CreateCommentsComponent } from './comments/create-comments/create-comments.component';
import { UpdateCommentsComponent } from './comments/update-comments/update-comments.component';
import { CreatePostComponent } from './posts/create/create.component';
import { PostsComponent } from './posts/posts.component';
import { UpdatePostsComponent } from './posts/update-posts/update-posts.component';
import { TestService } from './test.service';
import { HelloComponent } from './test/hello/hello.component';
import { NavBarComponent } from './test/nav-bar/nav-bar.component';
import { TestComponent } from './test/test.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    CommentsComponent,
    CreateCommentsComponent,
    UpdateCommentsComponent,
    PostsComponent,
    CreatePostComponent,
    UpdatePostsComponent,
    TestComponent,
    HelloComponent,
    NavBarComponent,
  ],
  imports: [CommonModule, UserRoutingModule, SharedModule],
  providers: [BotService, TestService],
})
export class UserModule {}
