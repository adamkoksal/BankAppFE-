import { Component, OnDestroy } from "@angular/core";
import { AccountService } from "src/app/service/account.service";
import { UserService } from "src/app/service/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "bill-pay",
  templateUrl: "./bill-pay.component.html",
  styleUrls: ["./bill-pay.component.css"]
})
export class BillPayComponent implements OnDestroy {
  account = {};
  subscription: any;
  accounts: any;
  companies: any;
  subscription2: any;
  subscription3: any;

  constructor(
    private accountService: AccountService,
    private userService: UserService,
    private router: Router
  ) {
    this.subscription = this.accountService
      .getAccountsByUser(this.userService.getUserId())
      .subscribe(a => (this.accounts = a));

    this.subscription2 = this.accountService
      .getAccountsByUser(155)
      .subscribe(c => (this.companies = c));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
    if (this.subscription3) {
      this.subscription3.unsubscribe();
    }
  }

  submit(value) {
    console.log(value);
    this.subscription3 = this.accountService
      .billPay(value.accountFrom.id, value.accountTo, value.amount)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    this.router.navigate(['/home']).then(() => location.reload());
  }
}
