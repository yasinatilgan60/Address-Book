import { Injectable } from "@angular/core";
import { Address } from "../model/Address";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AddressService {
  constructor(private http: HttpClient) {} // API'ye bağlanma ve verileri almak için HttpClient kullanılmıştır.
  path = "http://localhost:3000/addresses";
  message: string = "Address added";
  addressList: Address[] = [];
  getAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(this.path).pipe(
      tap(data => data.sort((obj1, obj2) => (obj1.name > obj2.name ? 1 : -1))), // API'den gelen verinin isme göre sıralaması yapılmaktadır.
      catchError(this.handleError)
    ); // Observable ( Abone olunabilir ) Address dizisi geriye gönderilmektedir.
  }
  sortedList(addressList: Address[]) {
    // Bu metod yeni eklenen veri ile sıralamanın yapılması için kullanılmıştır.
    addressList.sort((obj1, obj2) => (obj1.name > obj2.name ? 1 : -1));
  }
  add(address: Address): Observable<Address> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post<Address>(this.path, address).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    ); //Observable ( Abone olunabilir ) address değeri geriye gönderilmektedir.
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = "Error " + err.error.message;
    } else {
      errorMessage = "System Error";
    }
    return throwError(errorMessage);
  }
}
