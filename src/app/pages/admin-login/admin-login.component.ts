import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(email: string, password: string) {
    this.authService.isAuthenticated(email, password).subscribe((data) => {
      if (data.status == true) {
        localStorage.setItem("email",email);
        localStorage.setItem("password",password);
        this.router.navigate(['/admin']);
      }
      else {
        alert("Email veya şifre yanlış");
      }
    });
  }
}
