import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $: any;
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: any;
  applicantId: any;
  applicantName: any;
  solid: number;
  documentValue: any;
  filename: any;
  dateOfBirth: any
  mobile: any
  address: any
  loanAmount: any
  noOfMonths: any
  emi: any
  bmLoanAmount: any
  bmNoOfMonths: any
  bmEmi: any
  savingAccount: any
  confirmSavingAccount: any
  bankCustomerId: any
  confirmbankCustomerId: any
  remarks: any
  bankstatus: any
  applicationid: any
  rateofInterest: any
  showMe: any = false;
  clickedTargetId: any;
  clickedTargetValue: any;
  pendingCustomerData: any = [];
  imagesrc: string;
  applicantID: number;
  googlemaphousemap: any;
  googlemapbusinessmap: any;
  max: any
  roi: any;
  aadharNumber: any;
  common_IP: any;
  rate: any;
  base_url: any;
  houselattitude: number;
  houselongitude: number;
  businesslattitude: number;
  businesslongitude: number;
  datatablesViewData:any
  constructor(
    private http: HttpClient,
    private router: Router, ) { }
  ngOnInit() {
    this.id = JSON.parse(sessionStorage.getItem('username'))
    this.common_IP = JSON.parse(sessionStorage.getItem('commonIP'))
    this.datatablesViewData = JSON.parse(sessionStorage.getItem('datatablesViewData'))
    }





  getclickedId(event) {
    this.bmLoanAmount = (<HTMLInputElement>document.getElementById("loanAmount")).value;
    this.bmEmi = (<HTMLInputElement>document.getElementById("emiAmt")).value;
    this.bmNoOfMonths = (<HTMLInputElement>document.getElementById("NoOfMonths")).value;
    this.remarks = (<HTMLInputElement>document.getElementById("remarks")).value;
    this.clickedTargetValue = event.currentTarget.value
    this.clickedTargetId = event.currentTarget.id

    var message = $('#message').html()
    var nextmessage = $('#nextMessage').html()
    if (this.clickedTargetId == 'Approved') {
          this.clickedTargetId = event.currentTarget.id
          if (this.clickedTargetValue = 'Approve') {
            this.clickedTargetValue = event.currentTarget.value

          }
          else {
            this.clickedTargetValue = event.currentTarget.value

          }
    }
        $("#modalPopup").modal('show');

        this.clickedTargetId = event.currentTarget.id
        this.clickedTargetValue = event.currentTarget.value
      }
  getAllData(event) {
    var targetId = event.currentTarget.id
    this.applicationid
    const base_url = this.common_IP + '/approval-service/users/submit'
    // const base_url = 'http://localhost:8892/users/submit'
    this.pendingCustomerData.forEach(data => {
      this.applicantId = data.applicationid
      this.applicantName = data.appl1name
      this.dateOfBirth = data.dobdate
      this.mobile = data.mobileno
      this.address = data.appl1address
      this.loanAmount = data.uhRecommendedLoanamount
      this.noOfMonths = data.uhRecommendedNoofmonths
      this.emi = data.uhRecommendedInstalmentamount
      this.rateofInterest = data.mclr * 1 + data.mclrmalefemale * 1,
        this.rate = this.rateofInterest.toFixed(2)
      this.bmLoanAmount = (<HTMLInputElement>document.getElementById("loanAmount")).value;
      this.bmEmi = (<HTMLInputElement>document.getElementById("emiAmt")).value;
      this.bmNoOfMonths = (<HTMLInputElement>document.getElementById("NoOfMonths")).value;
      this.remarks = (<HTMLInputElement>document.getElementById("remarks")).value;
      if (this.showMe == false) {
        this.confirmSavingAccount = '';
        this.confirmbankCustomerId = '';
      }
      else {
        this.confirmSavingAccount = (<HTMLInputElement>document.getElementById("confirmsavingAccount")).value;
        this.confirmbankCustomerId = (<HTMLInputElement>document.getElementById("confirmbankCustId")).value;
      }
      this.http.post(base_url, {
        solid: this.id,
        applicationid: this.applicantId,
        bankcustid: this.confirmbankCustomerId,
        bankremarks: this.remarks,
        loanamountsactioned: this.bmLoanAmount,
        instalmentamount: this.bmEmi,
        savingaccnumber: this.confirmSavingAccount,
        noofinstalments: this.bmNoOfMonths,
        bankverificationstatus: targetId,
        interestrate: this.rate

      }).subscribe(data => {
        console.log(data['status'])
        if (data['status'] == 200) {
          if (targetId == 'Approved') {
            alert("Application Approved Successfully")
            this.router.navigate(['/pending_for_review']).then(() => {
              window.location.reload();
            });
          } else if (targetId == 'Returned') {
            alert("Application Returned Successfully")
            this.router.navigate(['/pending_for_review']).then(() => {
              window.location.reload();
            });
          } else {
            alert("Application Rejected Successfully")
            this.router.navigate(['/pending_for_review']).then(() => {
              window.location.reload();
            });
          }
        } else {
          if (targetId == 'Approved') {
            alert("Application Failed To Approved")
          } else if (targetId == 'Returned') {
            alert("Application Failed To Returned")
          } else {
            alert("Application Failed To Rejected")
          }
        }

      })
    });
  }
}
