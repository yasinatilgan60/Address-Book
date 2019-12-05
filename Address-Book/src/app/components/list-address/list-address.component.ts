import { Component, OnInit, Input } from "@angular/core";
import { Address } from "src/app/model/Address";
import { AddressService } from "src/app/services/address.service";

@Component({
  selector: "app-list-address",
  templateUrl: "./list-address.component.html",
  styleUrls: ["./list-address.component.css"]
})
export class ListAddressComponent implements OnInit {
  constructor(private addressService: AddressService) {}
  addressList: Address[] = [];
  filterText: string = "";
  ngOnInit() {
    this.addressService.getAddress().subscribe(data => {
      this.addressList = data;
      this.addressService.addressList = this.addressList; // Son eklenen verinin listeye anlık olarak eklenmesi sağlanmıştır.
    });
  }
}
