import { Component } from '@angular/core';
import { MESSAGE } from './app.model';
import { PusherService } from './pusher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatFront';
  msg = new MESSAGE;
  myeve:any
  constructor(private dataService:PusherService){}


  message(){
    this.dataService.message(this.msg).subscribe(e=>{

    })
  }
}
