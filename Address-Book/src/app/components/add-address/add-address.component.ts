import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Address } from "src/app/model/Address";
import { AddressService } from "src/app/services/address.service";
import { AlertifyService } from "src/app/services/alertify.service";

@Component({
  selector: "app-add-address",
  templateUrl: "./add-address.component.html",
  styleUrls: ["./add-address.component.css"]
})
export class AddAddressComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder, // Reactive Form oluşturmak Form Builder kullanılacaktır.
    private addressService: AddressService, // Adres ekleme işlemi için servis kullanılacaktır.
    private alertifyServis: AlertifyService // Adres eklendiğinde kullanıcıya uyarı verilecektir.
  ) {}
  address: Address;
  addressAddForm: FormGroup;
  regex = /^[A-Z].*$/; // validasyonlarda kullanılacak olan regex değerleridir.
  numberRegex = /^[0-9]*$/;
  ngOnInit() {
    this.createAddressForm(); // Component oluştuğunda Reactive Form oluşturulacaktır.
  }
  createAddressForm() {
    this.addressAddForm = this.formBuilder.group({
      // HTML'de kullanılacak validasyon tanımlamaları yapılmıştır.
      name: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
          Validators.pattern(this.regex)
        ])
      ],
      lastName: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(this.regex)
        ])
      ],
      phoneNumber: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
          Validators.pattern(this.numberRegex)
        ])
      ]
    });
  }
  addAddress() {
    if (this.addressAddForm.valid) {
      this.address = Object.assign({}, this.addressAddForm.value);
      this.address.id = Math.floor(Math.random() * 100000); // Json-server id beklediği için random id değeri atanmıştır.
      // Servisdeki add metodu observable nesne dönderdiği için subscribe (abone) işlemi gerçekleştirilmiştir.
      this.addressService.add(this.address).subscribe(data => {
        this.addressService.addressList.push(data);
        this.addressService.sortedList(this.addressService.addressList);
        this.alertifyServis.success(`${data.name} ${data.lastName} Added`);
      });
    }
    this.addressAddForm.reset();
  }
}
