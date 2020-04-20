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
  unitname:any
  state:any
  status:any
  bankname:any
  State:any
  productname:any
  Updatestatus:any

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

  fetchData(event) {
    this.datatablesData = []
    var selected_id = event.currentTarget.id
    this.datatables.forEach(data => {
      if (selected_id == data.id) {
        this.datatablesData.push(data)
        console.log(data)
        this.viewApplication.regionalofficedata(this.datatablesData)
        this.router.navigateByUrl('/update');
      }
    })
  }
  
  createnew(event) {
    $('#addNew_with_modal').modal('toggle');
    const base_URL = 'http://localhost:8855/createUnit'
    // const base_URL = this.common_IP + '/createRO'
    this.unitname = (<HTMLInputElement>document.getElementById("unitname")).value;
    this.State = (<HTMLInputElement>document.getElementById("State")).value;
    this.status = (<HTMLInputElement>document.getElementById("status")).value;
 

    this.http.post(base_URL, {
     
      unitname: this.unitname,
      state: this.State,
      status:this.status

    }).subscribe(data => {
      console.log(this.unitname)
      console.log(this.state)
      console.log(this.status)
      console.log(data['status'])
      if (data['status'] == '00') {
        alert("Data Created Successfully")
        window.location.reload();
      }

    })
  }

  updateData(event) {
    $('#updateModal').modal('toggle');
    const base_URL = "http://localhost:8855/updateUnitdata"

    var targetId = event.target.id
    this.datatables.forEach(item => {
      if(item.id == targetId) {
       this.state = (<HTMLInputElement> document.getElementById("State")).value 
      this.unitname = (<HTMLInputElement> document.getElementById("unitname")).value 
      this.Updatestatus = (<HTMLInputElement> document.getElementById("Updatestatus")).value 
      console.log(this.state)
      console.log(this.unitname)
      console.log(this.Updatestatus)
      
       
       this.http.post(base_URL, {
          id: event.target.id,
          state: this.state,
          Updatestatus: this.Updatestatus,
          unitname: this.unitname
         

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
