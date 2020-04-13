import { Component, OnInit } from '@angular/core';
import { AuthPassService } from 'src/app/service/auth-pass.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(authpass: AuthPassService) { }

  id :any
  ngOnInit() {
	  this.id = JSON.parse(sessionStorage.getItem('username'))
	  console.log(this.id)
  }
}