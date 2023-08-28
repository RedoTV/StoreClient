import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
      this.router.navigate(['/identity']);
    }
    catch{}
  }
}
