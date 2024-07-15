import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { loadData, loadDataSuccess } from '../../store/actions';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  data: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch(loadData());

    // Simulate a data load success
    setTimeout(() => {
      this.store.dispatch(loadDataSuccess({ data: { example: 'data' } }));
    }, 2000);

    this.store.select(state => state.dataState.data).subscribe(data => {
      this.data = data;
      console.log('Data from store:', data);
    });
  }

  login() {
    const sanitizedUsername = DOMPurify.sanitize(this.username);
    const sanitizedPassword = DOMPurify.sanitize(this.password);

    if (this.authService.login(sanitizedUsername, sanitizedPassword)) {
      this.router.navigate(['/tabs']);
    } else {
      alert('Login failed');
    }
  }
}
