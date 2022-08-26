import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css'],
})
export class ViewcourseComponent implements OnInit {
  constructor(private api:ApiService) {
    this.fetchData()
  }

  fetchData=()=>{
   this.api.getCourse().subscribe(res=>{
      this.data = res 
    })
  }

  ngOnInit(): void {}
  data: any = [];
  
  deleteEvent=(id:any)=>{
    const deleteData:any= {"_id": id}
    this.api.removeCourse(deleteData).subscribe((response:any)=>{
      if (response.status == 'success') {
        alert("successfully deleted")
        this.fetchData()
      } else {
        alert("Error in deletion")
      }
    })
  }
  
}
