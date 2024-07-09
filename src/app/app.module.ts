import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SocketService } from './services/socket.service';
import { CreatePackageComponent } from './create-package/create-package.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CreatePackageComponent,
    CreateDeliveryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ApiService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
