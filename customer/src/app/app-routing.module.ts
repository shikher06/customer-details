import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { CustomersComponent } from './customers/customers.component';

const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'customers', component: CustomersComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
