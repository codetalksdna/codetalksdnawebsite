import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthPassService } from 'src/app/service/auth-pass.service';
import { Router } from '@angular/router';
import { ViewApplicationService } from 'src/app/service/view-application.service';

@Component({
  selector: 'app-bankbranch',
  templateUrl: './bankbranch.component.html',
  styleUrls: ['./bankbranch.component.css']
})
export class BankbranchComponent implements OnInit {

  constructor(private http: HttpClient,
    private rejectedLoans: AuthPassService,
    private viewApplication: ViewApplicationService,
    private router: Router) {

  }
  datatables: any = []
  selectedValue: any = []
  common_IP: any;
  status: any
  roid: any
  bankid: any
  unitid: any
  solid: any
  latitude: any
  longitude: any
  state: any
  branchname: any

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


  getevent(event) {
    $(document).ready(function () {
      let strings = $('#selectall').click(function () {
      });
      console.log(strings)
      let string = $('.option').prop("checked", true);
    });
  }
  getData(event) {
    const base_URL = 'http://202.65.144.147:8855/getAllBranches?pageNumber=0&size=5'
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
    const base_URL = 'http://localhost:8855/addbankbranch'
    this.latitude = 73.6
    this.longitude = 34.8
    this.solid = (<HTMLInputElement>document.getElementById("solid")).value;
    this.unitid = (<HTMLInputElement>document.getElementById("unitid")).value;
    this.bankid = (<HTMLInputElement>document.getElementById("bankid")).value;
    this.roid = (<HTMLInputElement>document.getElementById("roid")).value;
    this.status = (<HTMLInputElement>document.getElementById("status")).value
    this.state = (<HTMLInputElement>document.getElementById("state")).value
    this.branchname = (<HTMLInputElement>document.getElementById("branchname")).value

    this.http.post(base_URL, {

      latitude: this.latitude,
      longitude: this.longitude,
      roid: this.roid,
      solid: this.solid,
      branchname:this.branchname,
      state: this.state,
      bankid:this.bankid,
      status: this.status,
      unitid: this.unitid,
      created_datetime:20201210123456

    }).subscribe(data => {
      console.log(this.longitude)
      console.log(this.latitude)
      console.log(this.solid)
      console.log(this.unitid)
      console.log(this.bankid)
      console.log(this.roid)
      console.log(this.status)

      console.log(data['status'])
      if (data['status'] == '00') {
        alert("Data Created Successfully")
        window.location.reload();
      }

    })
  }
}
