import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { BooklistComponent } from './booklist/booklist.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserListComponent } from './user-list/user-list.component';
const routes: Routes = [
  {path:'userlist',component:UserListComponent},
  {path:'adduser',component:AddUserComponent},
  {path:'booklist',component:BooklistComponent},
  {path:'updatebook/:bookid',component:UpdateBookComponent},
  {path:'',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
