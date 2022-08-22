// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { AuthService } from 'src/app/auth/auth.service';

// @Component({
//   selector: 'app-sidenav-list',
//   templateUrl: './sidenav-list.component.html',
//   styleUrls: ['./sidenav-list.component.css']
// })
// export class SidenavComponent implements OnInit {
// @Output() closeSidenav = new EventEmitter<void>()
//   constructor(private authService: AuthService) { }

//   ngOnInit(): void {
//   }
//   onClose(){
// this.closeSidenav.emit() ;
//   }
// }



import { Component, EventEmitter, OnInit, Output,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavComponent implements OnInit, OnDestroy  {
@Output() closeSidenav = new EventEmitter<void>();
 isAuth = false;
  authSubscription: Subscription = new Subscription;
constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
  onClose(){
this.closeSidenav.emit() ;
  }
onLogout() {
    this.onClose();
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}