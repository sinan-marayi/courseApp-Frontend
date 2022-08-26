import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchcourse',
  templateUrl: './searchcourse.component.html',
  styleUrls: ['./searchcourse.component.css']
})
export class SearchcourseComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
  courseTitle= ""
  courseDuration= ""
  courseVenue= ""
  courseDate=""
  courseDescription=""

  searchEvent=()=>{
    const data:any = {"courseTitle": this.courseTitle}
    this.api.searchCourse(data).subscribe((response:any)=>{
      console.log(response)
      this.courseVenue=response.data[0].courseVenue
      this.courseDescription=response.data[0].courseDescription
      this.courseDate=response.data[0].courseDate
      this.courseDuration=response.data[0].courseDuration
    })
  }
}
