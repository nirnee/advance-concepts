import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/admin/services/faq.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {

  //define variables
  faqs: any = [];
  uiConfig: any = {
    actionItems: {
        itemId: 'faqId'
    },
    tableColumns: [
      {
        title: 'faq Id',
        columnName: 'faqId'
      },
      {
        title: 'question',
        columnName: 'question'
      },
      {
        title: 'answer',
        columnName: 'answer'
      },
      {
        title: 'created At',
        columnName: 'createdAt'
      }
    ]
  };
  
  constructor(
    private faqService: FaqService
  ) {
    //comment here
  }

  ngOnInit(): void {
    this.getFaqs();
  }

  //get faqs list
  getFaqs(){
    this.faqService.getFaq().subscribe({
      next:(response) => {
        this.faqs = response;
        return response;
      },
      error:(err) => {
        console.log(err);
      }
    });
    
  }

  //delete faq
  deleteEventHandler(id: any){
    alert("faq "+ id);
  }
}
