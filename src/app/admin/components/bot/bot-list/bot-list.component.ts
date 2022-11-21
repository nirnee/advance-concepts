import { Component, OnInit } from '@angular/core';
import { BotService } from 'src/app/admin/services/bot.service';

@Component({
  selector: 'app-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.scss']
})
export class BotListComponent implements OnInit {

  //define variables
  bots: any = [];
  uiConfig : any = {
    actionItems: {
        itemId: 'botId'
    },
    tableColumns: [
      {
        title:'bot Ids',
        columnName: 'botId'
      },
      {
        title:'name',
        columnName: 'name'
      },
      {
        title:'created At',
        columnName: 'createdAt'
      }
    ]
  };
  constructor(
    private botService: BotService
  ) {
  //comment here
  }

  ngOnInit(): void {
    this.getBots();
  }

  //get bots list
  getBots(){
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

  //deleet bot
  deleteEventHandler(id: any){
    alert("bot "+ id);
  }
}
