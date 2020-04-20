import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { UserIdleService } from 'angular-user-idle';
import { Subscription } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Employee Management';
  showHead = true
  showslider = true
  showfooter = true;
  public common_ip :any = 'http://202.65.144.147:8855';
  constructor(private router: Router, private userIdle: UserIdleService) {

    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/login') {
          this.showHead = false;
          this.showslider = false;
          this.showfooter = false;
        } else {
          this.showHead = true;
          this.showslider = true;
          this.showfooter = true;
        }
      }
    });

  }
  privatesubscription:Subscription;
  ngOnInit() {
 sessionStorage.setItem('commonIP', JSON.stringify(this.common_ip))
    var x = JSON.parse(sessionStorage.getItem('commonIP'))
    
    this.userIdle.startWatching();
   
    this.userIdle.onTimerStart().subscribe(count => {
      var eventList = ["click", "mouseover", "keydown", "DOMMouseScroll", "mousewheel",
        "mousedown", "touchstart", "touchmove", "scroll", "keyup"];
      for (let event of eventList) {
        document.body.addEventListener(event, () => this.userIdle.resetTimer());
      }
    });
    this.userIdle.onTimeout().subscribe(() => {
      alert("Your session has expired click on OK to resume the application.");
      this.router.navigate(['/login']);
    })

  }
}