import { Component, OnInit } from '@angular/core';
import { FaqService } from 'src/app/admin/services/faq.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {

  faqs: any = [];
  constructor(
    private faqService: FaqService
  ) { }

  ngOnInit(): void {
    this.getFaqs();
  }

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
}
