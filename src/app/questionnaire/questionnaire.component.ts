import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})

export class QuestionnaireComponent implements OnInit {
  private apiUrl = 'https://5ba81ec368c16e0014c4ef3a.mockapi.io/';
  questionnaire: any = [];
  radios: any = [];
  selects: any = [];

  registerForm: FormGroup;
  submitted = false;

  constructor(private http: Http, private formBuilder: FormBuilder, private router: Router) {
    console.log('hello');
    this.getQuestions();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl + 'questionnaire').pipe(
      map((res: Response) => res.json())
    )
  }

  getQuestions() {
    this.getData().subscribe(data => {
      console.log(data);
      this.questionnaire = data;
    })
  }

  show() {
    console.log('haha', this.radios, this.selects);
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert('SUCCESS!! :-)')

    this.router.navigate(['/success']);
  }

  goToHome() {
    this.router.navigate(['']);
  }

}
