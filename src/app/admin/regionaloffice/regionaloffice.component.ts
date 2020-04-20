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
    //   if (navigator)
    // {
    // navigator.geolocation.getCurrentPosition( pos => {
    //     this.lng = +pos.coords.longitude;
    //     this.lat = +pos.coords.latitude;
    //     console.log(this.lat, this.lng)
    //   });
    // }

  }
  datatables: any = []
  selectedValue: any = []
  common_IP: any;
  RoName: any
  status: any
  latitude: any
  longitude: any
  lat: any;
  lng: any;


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
  updatetargetId:number;

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
    const base_URL = this.common_IP + '/getAllROs?pageNumber=0&size=5'
    // const base_URL = this.common_IP+'/getAllROs?pageNumber=0&size=5'
    this.http.get(base_URL, {
    }).subscribe((data) => {
      console.log(base_URL)
      console.log(data)
      this.datatables.push(data)
      this.datatables = this.datatables[0].object
    })
  }

  createNewModal(event) {
    $('#createModal').modal('toggle');
    if (navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
        console.log(this.lat, this.lng)
        var lat = (<HTMLInputElement>document.getElementById("CreateLatitude")).value = this.lat
        var lng = (<HTMLInputElement>document.getElementById("CreateLongitude")).value = this.lng
      });

    }

  }
  createnew(event) {
    const base_URL = this.common_IP + '/createRO'
    // const base_URL = this.common_IP + '/createRO'
    this.RoName = (<HTMLInputElement>document.getElementById("CreateRoName")).value;
    this.status = (<HTMLInputElement>document.getElementById("Createstatus")).value;
    this.latitude = (<HTMLInputElement>document.getElementById("CreateLatitude")).value;
    this.longitude = (<HTMLInputElement>document.getElementById("CreateLongitude")).value;
    if(this.RoName == '') {
      alert('Please enter the RO Name')
    } else {
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
  }
  updateDataModal(event) {
    $('#updateModal').modal('toggle');
    this.datatables.forEach(item => {
      this.updatetargetId = event.target.id
      if (item.id == this.updatetargetId) {
        console.log(item)
      var roName = (<HTMLInputElement>document.getElementById("UpdateRoName")).value = item.roname
      var latitude = (<HTMLInputElement>document.getElementById("UpdateLatitude")).value = item.latitude
      var longitude = (<HTMLInputElement>document.getElementById("UpdateLongitude")).value = item.longitude
        var status = (<HTMLInputElement>document.getElementById("Updatestatus")).value = item.status

        console.log(status)
      }
    })
  }

  updateData(event) {
    const base_URL = this.common_IP+"/updateROdata"
    var roName = (<HTMLInputElement>document.getElementById("UpdateRoName")).value;
    var latitude = (<HTMLInputElement>document.getElementById("UpdateLatitude")).value;
    var longitude = (<HTMLInputElement>document.getElementById("UpdateLongitude")).value;
      var status = (<HTMLInputElement>document.getElementById("Updatestatus")).value
       this.http.post(base_URL, {
          id: this.updatetargetId,
          latitude: latitude,
          longitude: longitude,
          roname: roName,
          status: status

        }).subscribe(data => {
          console.log(data['status'])
          if (data['status'] == '00') {
            alert("Data Updated Successfully")
            window.location.reload();
          }
        })
      }
}