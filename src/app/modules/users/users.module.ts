import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './component/users/users.component';

@NgModule({
  declarations: [ UsersComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UsersModule { }
