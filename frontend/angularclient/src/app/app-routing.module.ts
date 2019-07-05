import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from "./component/user/user.component";
import { FormComponent } from "./component/form/form.component";

const routes: Routes = [
  { path: "users", component: UserComponent },
  { path: "adduser", component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
