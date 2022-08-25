import { Component, OnInit } from '@angular/core';
import { BotService } from 'src/app/admin/services/bot.service';

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.scss']
})
export class BotListComponent implements OnInit {

  bots: any = [];
  constructor(
    private botService: BotService
  ) { }

  ngOnInit(): void {
    this.getFaqs();
  }

  getFaqs(){
    this.botService.getBots().subscribe({
      next:(response:any) => {
        this.bots = response;
        return response;
      },
      error:(err) => {
        console.log(err);
      }
    });
    
  }
}
