import { HttpClient } from "@angular/common/http";
import User from "../models/user";
import { Observable } from "rxjs";
import { IAuthService } from "./iauth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService implements IAuthService{
    private http:HttpClient;

    constructor(http:HttpClient) {
        this.http = http;
    }

    signIn(user:User):Observable<string>{
        return <Observable<string>>(this.http.post('http://localhost:7001/Identity/SignIn', user));
    }

    register(user:User):Observable<string>{
        return <Observable<string>>(this.http.post('http://localhost:7001/Identity/Register', user));
    }
}