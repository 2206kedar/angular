import { Course } from './model/course';
import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AutoHeightService } from 'ngx-owl-carousel-o/lib/services/autoheight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  courses=COURSES;

  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 20,
    
    //autoWidth: true,
    
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  childData:Course;
  childData_long_description:Course;
  childData_image:Course;
  
  parentMethod(data){
    this.childData=data.description;
    this.childData_long_description=data.longDescription;
    this.childData_image=data.iconUrl;

  }

}
