import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.html',
  styles: ``
})
export class LoginPage {

  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit(): void {
    if(this.loginForm.invalid) return;
    console.log(this.loginForm.value)
  }
}
