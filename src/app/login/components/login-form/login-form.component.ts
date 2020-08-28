import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  invalidForm(form, field: string): boolean {
    return form.get(field).invalid && form.get(field).touched;
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      // Define properties
      email: ['', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(8)]]
    });
  }

  send(): void {

    const user = this.loginForm.value;

    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).map(control => {
        control.status === 'INVALID' && control.markAsTouched();
      });
      return;
    }


    // Post information

    // Reset form
    this.loginForm.reset();

  }
}
