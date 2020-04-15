import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, from } from "rxjs";
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class UserService {
  public id: number;


  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUser(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${this.id}`);
  }

  getUserByUsername(username: string) {
    return this.http.get<any[]>(`${this.baseUrl}/users/username=${username}`);
  }

  changeUsername(value): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/username/${this.id}`, value);
  }

  changePassword(value): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/password/${this.id}`, value);
  }

  changePasswordWithId(value, id): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/password/${id}`, value);
  }

  changeAddress(value): Observable<any> {
    return this.http.put(`${this.baseUrl}/users/address/${this.id}`, value);
  }

  changeSQ(value): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/users/security-question/${this.id}`,
      value
    );
  }

  setUserId() {
    this.id = +localStorage.getItem("id");
  }

  getUserId() {
    return this.id;
  }

  login(user): Observable<Object> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  signup(user): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, user);
  }

  getPassword(userId) {
    return this.http.get(`${this.baseUrl}/password/${userId}`);
  }

  
}
