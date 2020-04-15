import { Component, OnInit } from "@angular/core";
import { UserService } from "../service/user.service";
import { AccountService } from "../service/account.service";
import { MatDialog } from "@angular/material";
import { CreateAccountComponent } from "./account-details/create-account/create-account.component";
import { ActivatedRoute, Router} from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit{
  account$: any;
  user: any;
  sub: Subscription;

  constructor(
    private userService: UserService,
    private accountService: AccountService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router
  ) {
    // $(function() {
    //   $(window).scroll(function() {
    //     var mass = Math.max(20, 50 - 0.25 * $(this).scrollTop()) + "px";

    //     $("#expandable").css({ "font-size": mass, "line-height": mass });
    //   });
    // });

    this.account$ = this.route.snapshot.data["accounts"];
    this.user = this.route.snapshot.data["user"];

  }

  ngOnInit() {}

  openDialog() {
    this.dialog.open(CreateAccountComponent);
  }
}
