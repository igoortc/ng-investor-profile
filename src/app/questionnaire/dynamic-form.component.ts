import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';
import { Router } from '@angular/router';

import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  answers: any[];
  quests: any[];
  allData: any[] = [];

  constructor(private qcs: QuestionControlService, private router: Router) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.quests = Array.from(Object.keys(this.form.value));
    this.answers = Array.from(Object.values(this.form.value));
    for(let i = 0; i < this.quests.length; i++) {
      this.allData.push({
        key: this.quests[i],
        value: this.answers[i]
      })
    }
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
