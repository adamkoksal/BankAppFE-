import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Transaction } from "src/app/model/transaction";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  private id;

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient, private userService: UserService) {}

  getTransactionsByAccount(accountId) {
    return this.http.get<Transaction[]>(
      `${this.baseUrl}/transactions/${accountId}`
    );
  }

  getAccountsByUser(userId): Observable<any> {
    return this.http.get(`${this.baseUrl}/accounts/${userId}`);
  }

  getAccount(accountId): Observable<any> {
    return this.http.get(`${this.baseUrl}/account/${accountId}`);
  }

  createAccount(value: any): Observable<any> {
    var userId = this.userService.getUserId();
    return this.http.post(`${this.baseUrl}/account/${userId}`, value);
  }

  updateAccount(accountId: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/account/${accountId}`, value);
  }

  deleteAccount(accountId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/account/${accountId}`);
  }

  setAccountId(accountId) {
    this.id = accountId;
  }

  getAccountId() {
    return this.id;
  }

  // Transactions

  transfer(fromId, toId, amount): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/transfer/${fromId}/${toId}/${amount}`,
      null
    );
  }

  billPay(fromId, toId, amount): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/pay-bill/${fromId}/${toId}/${amount}`,
      null
    );
  }
}
