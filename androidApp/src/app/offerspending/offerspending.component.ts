import { Component, OnInit } from '@angular/core';
import {users} from '../offerspendinglist'
import { Offerspending } from './model/offerspending.model';
import { PaginationService } from '../services/pagination.service';
import { OfferspendingService } from '../services/offerspending.service';
import { Offers } from './model/offerspending';



@Component({
  selector: 'app-offerspending',
  templateUrl: './offerspending.component.html',
  styleUrls: ['./offerspending.component.css']
})
export class OfferspendingComponent implements OnInit{

  constructor(private offerspendingservice:OfferspendingService){
    this.offerspendingservice.getOffersPendingList().subscribe((data)=>{
      this.offers=data;
    })
  }

  ngOnInit(): void {
//    this.getOffersPendings();
  }
  offerspendingList: Offerspending[] = users;



  res: Offers = new Offers;
  offers:any;


  //------Pagination --------
   title = 'pagination';
   page: number = 1;
   count: number = 0;
   tableSize : number = 10;
   tableSizes: any = [5,10,15,20];

  onTableDataChange(event: any){
    this.page = event;
    //this.offerspendingList;
    this.offers;
  }
 
  onTableSizeChange(event: any){
    this.tableSize = event.target.value;
    this.page = 1;
    this.offerspendingList;
  }

  /*
  getReservations() {
    this.reservationService.getReservationList().subscribe(data => {
      console.log(Object.values(data.resList));
      this.reservation = data.resList;

    });*/

  //   getOffersPendings() {
  //     this.offerspendingservice.getOffersPendingList().subscribe(data => {
  //       console.log(Object.values(data.resList));
  //       this.offers = data.resList;
         
  //     });
  // }



}
