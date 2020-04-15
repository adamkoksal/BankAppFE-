import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  a = {};

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  submit(value) {
    this.userService.signup(value).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(["/login"]);
      },
      error => {
        console.log(error);
        this.router.navigate(["/login"]);
      }
    );
  }

}
