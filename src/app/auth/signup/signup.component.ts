import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { subscribeOn, Subscription } from 'rxjs';
import { UIService } from 'src/app/shared/ui.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  maxDate: Date | undefined;
  isLoading= false ;
  private loadingSubs: Subscription=new Subscription;
  constructor(private authService: AuthService, private uiService: UIService) {}


  ngOnInit(): void {
    // min age 18 years
    this.loadingSubs= this.uiService.loadingStateChanged.subscribe(isLoading =>{
      this.isLoading=isLoading ;
    })
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }
  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password,
    });
  }

  ngOnDestroy(): void {
  this.loadingSubs.unsubscribe(); 
  }

}
