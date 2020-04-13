import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewApplicationService implements OnInit {
  private pendingCustomerData: any = []
  private datatables: any = []

  constructor() { }
  ngOnInit() { }

  pendingViewdata(pendingCustomerData: any) {
    this.pendingCustomerData = pendingCustomerData;
    sessionStorage.setItem('pendingCustomerData', JSON.stringify(this.pendingCustomerData))
  }

  datatablesViewData(datatables: any) {
    this.datatables = datatables;
    sessionStorage.setItem('datatablesViewData', JSON.stringify(this.datatables))
    

  }
}


