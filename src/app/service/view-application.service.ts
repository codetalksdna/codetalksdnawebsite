import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewApplicationService implements OnInit {
  public pendingCustomerData: any = []
  public datatables: any = []
  public empdetails:any = []
  public bankbranchdatas: any = []
  public empunitdatas: any = []
  public masterbankdatas:any = []
  public masterunitdatas: any = []
  public regionalofficedatas: any = []
  constructor() { }
  ngOnInit() { }

 

  empdetailsdata(empdetails: any) {
    this.empdetails = empdetails;
    sessionStorage.setItem('empdetails', JSON.stringify(this.empdetails))
    

  }
  bankbranchdata(bankbranchdata: any) {
    this.bankbranchdata = bankbranchdata;
    sessionStorage.setItem('bankbranchdata', JSON.stringify(this.bankbranchdatas))
  }

  empunitdata(empunitdata: any) {
    this.empunitdata = empunitdata;
    sessionStorage.setItem('empunitdata', JSON.stringify(this.empunitdatas))
    

  }
  masterbankdata(masterbankdata: any) {
    this.masterbankdata = masterbankdata;
    sessionStorage.setItem('masterbankdata', JSON.stringify(this.masterbankdatas))
  }

  masterunitdata(masterunitdata: any) {
    this.masterunitdata = masterunitdata;
    sessionStorage.setItem('masterunitdata', JSON.stringify(this.masterunitdatas))
    

  }
  regionalofficedata(regionalofficedata: any) {
    this.regionalofficedata = regionalofficedata;
    sessionStorage.setItem('regionalofficedata', JSON.stringify(this.regionalofficedatas))

  }
}


