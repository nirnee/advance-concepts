import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BotAddEditComponent } from './admin/components/bot/bot-add-edit/bot-add-edit.component';
import { BotListComponent } from './admin/components/bot/bot-list/bot-list.component';
import { FaqAddEditComponent } from './admin/components/faq/faq-add-edit/faq-add-edit.component';
import { FaqListComponent } from './admin/components/faq/faq-list/faq-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BotListComponent,
    BotAddEditComponent,
    FaqListComponent,
    FaqAddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
