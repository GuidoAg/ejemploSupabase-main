// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { supabase } from '../../supabase-client'; // ✅ nuevo import

@Component({
  standalone: true,
  imports: [FormsModule, RouterLink],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private router: Router) {}

  login() {
    supabase.auth.signInWithPassword({
      email: this.username,
      password: this.password,
    }).then(({ data, error }) => {
      if (error) {
        console.error('Error:', error.message);
      } else {
        this.router.navigate(['/home']);
      }
    });
  }
}
