import { OnInit, Component } from '@angular/core';

// import { QuestionBase } from './question-base';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
  providers: [QuestionService]
})

export class QuestionnaireComponent {
  questions: any[];

  constructor(service: QuestionService) {
    // this.fetchQuestions();
    this.questions = service.getQuestions();
  }

  // fetchQuestions() {
  //   this.service.getQuestionsFromAPI().subscribe(res => {
  //     let question: QuestionBase<any>[] = [];
  //     res.forEach(r => {
  //       question.push(new QuestionBase(r))
  //     })
  //     this.questions = question
  //     console.log('Questões:', this.questions);
  //     return question;
  //   })
  // }
}
