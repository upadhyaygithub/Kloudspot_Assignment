import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  showPassword = false;
  username = '';
  password = '';
  errorMessage = '';

  private router = inject(Router);
  private authService = inject(AuthService);
  private loadingService = inject(LoadingService);

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Please enter username and password';
      return;
    }

    // Start global loading
    this.loadingService.show();
    this.errorMessage = '';

    this.authService.login(this.username, this.password).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']);
        // Do NOT stop loading here. Dashboard will stop it when data is ready.
      },
      error: (err) => {
        console.error('Login failed', err);
        this.errorMessage = 'Invalid credentials or API error';
        this.loadingService.hide(); // Stop loading on error
      }
    });
  }
}
