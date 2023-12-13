import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { HttpEndpointsService } from '../../../services/http-endpoints.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule , FormsModule , ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder , private service : AuthService , http: HttpEndpointsService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    // Access form values using this.loginForm.value

    const { email, password } = this.loginForm.value;
    // Perform authentication logic
    console.log('Login clicked', this.loginForm.value);

    console.log('email' + email);
    console.log('email' + password);

    this.service.login(email , password);  
  }

}
