import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private userService = inject(UserService);
  protected router = inject(Router);

  userData$ = this.userService.userData$;

  navigate(path: string) {
    this.router.navigate([path]);
  }

  getAvatarUrl(path: string) {
    return this.userService.getAvatarUrl(path);
  }
}
