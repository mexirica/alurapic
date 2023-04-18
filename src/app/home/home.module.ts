import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [SigninComponent],
  imports: [ReactiveFormsModule],
})
export class HomeModule {}