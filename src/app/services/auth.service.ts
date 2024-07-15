import { Injectable } from '@angular/core';
import SecureLS from 'secure-ls';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private ls: SecureLS;

  constructor(private router: Router) {
    this.ls = new SecureLS();
    this.isAuthenticated = !!this.ls.get('token');
  }

  login(username: string, password: string): boolean {
    // Lógica de autenticación simulada
    if (username === 'cromapp' && password === 'crompass') {
      this.isAuthenticated = true;
      this.ls.set('token', 'fake-jwt-token'); // Simular almacenamiento de token
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    this.isAuthenticated = false;
    this.ls.remove('token'); // Eliminar token al cerrar sesión
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return this.ls.get('token');
  }
}
