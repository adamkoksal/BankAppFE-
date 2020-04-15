import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";
import { User } from "../model/user";
import { Observable } from "rxjs";
import { UserService } from "./user.service";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class UserResolverService implements Resolve<User> {
  constructor(private userService: UserService, private http: HttpClient) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | User {
    let id = +localStorage.getItem("id");
    return this.http.get(`http://localhost:8080/users/${id}`);
  }
}
