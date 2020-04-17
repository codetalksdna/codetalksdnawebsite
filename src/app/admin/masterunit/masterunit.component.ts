import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthPassService } from 'src/app/service/auth-pass.service';
import { Router } from '@angular/router';
import { ViewApplicationService } from 'src/app/service/view-application.service';

@Component({
  selector: 'app-masterunit',
  templateUrl: './masterunit.component.html',
  styleUrls: ['./masterunit.component.css']
})
export class MasterunitComponent implements OnInit {

  constructor(private http: HttpClient, 
    private rejectedLoans: AuthPassService,
    private viewApplication: ViewApplicationService,
    private router:Router) {

  }
  datatables  : any = []
  selectedValue:any=[]
  common_IP :any;
  

  ngOnInit() {
    this.common_IP = JSON.parse(sessionStorage.getItem('commonIP'))
    this.getData(event)
  }
  searchText;
 

  p: number = 1;
  public pageSize: number = 5;
  datatablesData = [];
  customerid:any
checkedItems=[]


getevent(event){
  $(document).ready(function() {
   let strings = $('#selectall').click(function(){
    });
    console.log(strings)
    let string = $('.option').prop("checked", true);
});
}
getnew(event) {
  alert("Button has been clicked")
      this.router.navigate(['/addemp']);
    }
  getData(event) {
    const base_URL = ''
    // const base_URL = 'http://localhost:8855/getAllUnits?pageNumber=0&size=5'
    // const base_URL = 'http://localhost:8855/getAllEmployees?pageNumber=0&size=5'
    this.http.get(base_URL, {
    }).subscribe((data) => {
      console.log(base_URL)
      console.log(data)
      this.datatables.push(data)
      this.datatables = this.datatables[0].object 
    })
  }

  fetchData(event) {
    this.datatablesData = []
    var selected_id = event.currentTarget.id
    this.datatables.forEach(data => {
      if (selected_id == data.empid) {
        this.datatablesData.push(data)
        console.log(data)
        this.viewApplication.masterunitdata(this.datatablesData)
        this.router.navigate(['/update']);
      }
    })
  }
}
