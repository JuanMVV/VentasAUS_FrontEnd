import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/features/auth/models/user.model';
import { AuthService } from 'src/app/features/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  user?: User;

  //injectamos el servico de autorizacion
  constructor(private authService: AuthService,
    private router:Router){

  }
  
  ngOnInit(): void {
    //llamamos al metodo user, para que nos devuelva los datos del usuario logeado
    this.authService.user()
    .subscribe({
      next: (response) =>{
        this.user = response;
      }
    });
    
    this.user = this.authService.getUser();

  }


  onLogout():void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
