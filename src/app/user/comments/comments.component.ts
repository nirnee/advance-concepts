import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import employees from '../../shared/configs/data.json';

//component to render comments 
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor( 
    private router: Router,
    private route: ActivatedRoute
  ) {
    //comment here
   }

  routeSub: any;
  empId: any;
  data: any;
  comments: any;
  noData: boolean = false;

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.empId = parseInt(params['postId'].substring(1)) 
    });
    this.data = employees.employees.filter((a:any)=>a.id == this.empId)[0];
    this.comments = this.data.comments;
    
    //If no comment then show message
    if(this.comments.length==0){
      this.noData = true;
    }
  }
  
  //edit comment
  edit(data: any){
    this.router.navigateByUrl('/user/comments/update/:'+this.empId+'/:'+data.comId)
  }
  
  //add comment
  add(){
    this.router.navigateByUrl('/user/comments/:'+this.empId+'/create')
  }

  //redirect to post
  post(){
    this.router.navigateByUrl('/user/posts');
  }

  //delete function
  delete(data:any){
    this.router.navigateByUrl('comments/delete/:'+this.empId+'/:'+data.comId)
  }
}
