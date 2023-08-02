import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  imgUrl: string = 'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-bleu.png';

  errorOccurred: boolean = false;

  constructor(private router: Router,
    private accountService: AccountService,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  async onSubmit() {
    try {
      if (this.loginForm.invalid) {
        return;
      }

      const result = await this.accountService.login(this.loginForm.value);
      if (result) {
        console.log('Login efetuado com sucesso');
        this.router.navigate(['home']);
      } else {
        this.errorOccurred = true;
        setTimeout(() => {
          this.errorOccurred = false;
        }, 2000);
      }
    } catch (error) {
      console.log('Erro durante o login:', error);
    }
  }
}
