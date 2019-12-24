import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '@services/authentication/authentication.service';
import { SpinnerService } from '@services/spinner/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public onLoginForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private spinnerService: SpinnerService) {}

  ngOnInit() {
    this.onLoginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  async login(loginForm: FormGroup) {
    if (!loginForm.valid) {
      console.log('Form is not valid yet, current value:', loginForm.value);
    } else {
      this.spinnerService.spin$.next(true);
      const { email, password } = loginForm.value;
      try {
        await this.authenticationService.login(email, password);
        localStorage.setItem('isLoggedin', 'true');
        this.spinnerService.spin$.next(false);
        this.router.navigate(['/dashboard']);

      } catch (error) {
        console.log(error);
        this.spinnerService.spin$.next(false);
      }
    }
  }

  forgotPassword() {

  }
}
