import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {


  questions: string[] = ['Qual o seu comportamento?', 'Por quanto tempo?'];
  chosen: string;
  answers: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];

  constructor() { }

  ngOnInit() {
  }

}
