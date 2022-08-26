import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css'],
})
export class AddcourseComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {}

  courseVenue = '';
  courseDate = '';
  courseTitle = '';
  courseDescription = '';
  courseDuration = '';

  showResult = () => {
    let data = {
      courseVenue: this.courseVenue,
      courseDate: this.courseDate,
      courseTitle: this.courseTitle,
      courseDescription: this.courseDescription,
      courseDuration: this.courseDuration,
    };
    console.log(data);
    this.api.addCourse(data).subscribe((response: any) => {
      console.log(response['status']);
      if (response.status === 'error') {
        // alert('something went wrong');
        this.isError=true
      } else {
        // alert('successfully added');
        
        this.courseVenue = '';
        this.courseDate = '';
        this.courseTitle = '';
        this.courseDescription = '';
        this.courseDuration = '';
        this.isError=false
        this.isChange=true
      }
    });
  };
  isError:any
  isChange:any=false
}
