import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthPassService } from 'src/app/service/auth-pass.service';
import { Router } from '@angular/router';
import { ViewApplicationService } from 'src/app/service/view-application.service';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-regionaloffice',
  templateUrl: './regionaloffice.component.html',
  styleUrls: ['./regionaloffice.component.css']
})
export class RegionalofficeComponent implements OnInit {

  constructor(private http: HttpClient,
    private rejectedLoans: AuthPassService,
    private viewApplication: ViewApplicationService,
    private router: Router) {

  }
  datatables: any = []
  selectedValue: any = []
  common_IP: any;
  RoName: any
  status: any
  latitude: any
  longitude: any


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
  getnew(event) {
    this.router.navigate(['/newro']);
  }
  getData(event) {
    const base_URL = 'http://202.65.144.147:8855/getAllROs?pageNumber=0&size=5'
    // const base_URL = this.common_IP+'/getAllROs?pageNumber=0&size=5'
    this.http.get(base_URL, {
    }).subscribe((data) => {
      console.log(base_URL)
      console.log(data)
      this.datatables.push(data)
      this.datatables = this.datatables[0].object
    })
  }
  updateData(event) {
    $('#updateModal').modal('toggle');
  }
 
  createnew(event) {
    $('#addNew_with_modal').modal('toggle');
    const base_URL = 'http://localhost:8855/createRO'
    // const base_URL = this.common_IP + '/createRO'
    this.RoName = (<HTMLInputElement>document.getElementById("RoName")).value;
    this.status = (<HTMLInputElement>document.getElementById("status")).value;
    this.latitude = 72.6;
    this.longitude = 13.8;

    console.log(this.RoName)
    console.log(this.status)
    this.http.post(base_URL, {
      latitude: this.latitude,
      longitude: this.longitude,
      roname: this.RoName,
      status: this.status

    }).subscribe(data => {
      console.log(data['status'])
      if (data['status'] == '00') {
        alert("Data Created Successfully")
        window.location.reload();
      }

    })
  }

  updateDatas(event) {
    $('#updateModal').modal('toggle');
    const base_URL = "http://localhost:8855/updateROdata"

    this.datatables.forEach(item => {
      var targetId = event.target.id

      if (item.id == targetId) {
        this.RoName = (<HTMLInputElement>document.getElementById("UpdateRoName")).value
        this.status = (<HTMLInputElement>document.getElementById("Updatestatus")).value
        this.latitude=73.6,
        this.longitude=38.4
        console.log(this.RoName)
        console.log(this.status)
       
       this.http.post(base_URL, {
          id: event.target.id,
          latitude: this.latitude,
          longitude: this.longitude,
          roname: this.RoName,
          status: this.status

        }).subscribe(data => {
          console.log(data['status'])
          if (data['status'] == '00') {
            alert("Data Updated Successfully")
            window.location.reload();
          }
        })

      }
    });
  }
}