import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertifyService} from './services/alertify.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { ListAddressComponent } from './components/list-address/list-address.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddressFilterPipe } from './components/list-address/address-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AddAddressComponent,
    ListAddressComponent,
    AddressFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
