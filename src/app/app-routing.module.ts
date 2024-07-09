import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CreatePackageComponent } from './create-package/create-package.component';
import { CreateDeliveryComponent } from './create-delivery/create-delivery.component';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full'},
  { path: 'admin', component: AdminComponent},
  { path: 'create-package', component: CreatePackageComponent},
  { path: 'create-delivery', component: CreateDeliveryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
