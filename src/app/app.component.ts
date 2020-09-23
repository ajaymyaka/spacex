import { Component , OnInit} from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title ='spacex';
  data= [];
  ret:any;
  constructor(private backendService: DataService) { }

ngOnInit() {
  this.backendService.get().subscribe((ret: any[])=>{
    console.log(ret);
    this.data = ret;
  })  
}
}