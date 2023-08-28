import { Observable } from "rxjs";
import User from "../models/user";

export interface IAuthService{
    signIn(user:User):Observable<string>;
    register(user:User):Observable<string>;
}