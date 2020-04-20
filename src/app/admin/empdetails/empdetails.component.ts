import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthPassService } from 'src/app/service/auth-pass.service';
import { Router } from '@angular/router';
import { ViewApplicationService } from 'src/app/service/view-application.service';
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  constructor(private http: HttpClient,
    private rejectedLoans: AuthPassService,
    private viewApplication: ViewApplicationService,
    private router: Router) {

  }
  datatables: any = []
  selectedValue: any = []
  common_IP: any;
  empname: any
  Designation: any
  Report: any
  State: any
  status: any
  latitude: any
  longitude: any
  empid:any


  ngOnInit() {
    this.common_IP = JSON.parse(sessionStorage.getItem('commonIP'))
    this.getData(event)
  }
  searchText;


  p: number = 1;
  public pageSize: number = 5;
  datatablesData = [];
  customerid: any
  checkedItems = []


  getnew(event) {
    this.router.navigate(['/addemp']);
  }
  getData(event) {
    const base_URL = 'http://202.65.144.147:8855/getAllEmployees?pageNumber=0&size=5'
    this.http.get(base_URL, {
    }).subscribe((data) => {
      console.log(base_URL)
      console.log(data)
      this.datatables.push(data)
      this.datatables = this.datatables[0].object
    })
  }
  createnew(event) {
    $('#addNew_with_modal').modal('toggle');
    const base_URL = 'http://localhost:8855/createEmployeeRequest'
    this.empid=(<HTMLInputElement>document.getElementById("empid")).value;
    this.empname = (<HTMLInputElement>document.getElementById("empname")).value;
    this.Designation = (<HTMLInputElement>document.getElementById("Designation")).value;
    this.Report = (<HTMLInputElement>document.getElementById("Report")).value;
    this.State = (<HTMLInputElement>document.getElementById("State")).value;
    this.status = (<HTMLInputElement>document.getElementById("status")).value;
    this.latitude = 72.6;
    this.longitude = 38.5


    this.http.post(base_URL, {
      empid:this.empid,
      empname: this.empname,
      latitude: 73.6,
      longitude: 38.5,
      Designation: this.Designation,
      report_to: this.Report,
      state: this.State,
      status: this.status,

    }).subscribe(data => {
      console.log(this.empname)
      console.log(this.Designation)
      console.log(this.Report)
      console.log(this.status)
      console.log(this.State)
      console.log(this.latitude)
      console.log(this.longitude)

      console.log(data['status'])
      if (data['status'] == '00') {
        alert("Data Created Successfully")
        window.location.reload();
      }

    })
  }
}
  
