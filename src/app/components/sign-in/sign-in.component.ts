import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import User from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  private authService:AuthService;
  private router:Router;

  public userFormData:User;

  constructor(authService:AuthService, router:Router){
    this.authService = authService;
    this.router = router;

    this.userFormData = new User();
  }

  ngOnInit(): void {
    try{
      let token = localStorage.getItem('token');
      if(token === null){
        throw new Error('token is null');
      } 
      else{
        this.router.navigate(['/identity']);
      }
    }
    catch{}
  }

  signIn(){
    
  }

  getToken():(string|null){
    let token:string|null = null;

    if(this.userFormData !== null){
      this.authService.signIn(this.userFormData).subscribe((tokenData:string) => token = tokenData);
    }

    return token;
  }
}
