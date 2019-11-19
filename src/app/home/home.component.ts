import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 students;
  constructor(public service:DataService) { }


  
  ngOnInit() {

    let data=this.service.getdata();
    data.subscribe((result)=>{
    this.students=result;

    });
  }

}
