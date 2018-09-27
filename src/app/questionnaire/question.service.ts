import { Injectable } from '@angular/core';
// // import { Http, Response } from '@angular/http';
// // import { map } from 'rxjs/operators';

import { QuestionBase } from './question-base';
import { QuestionField } from './field-question';

@Injectable()
export class QuestionService {
  // private apiUrl = 'https://5ba81ec368c16e0014c4ef3a.mockapi.io/';

  // constructor(private http: Http) { }

  // getQuestionsFromAPI() {
  //   return this.http.get(this.apiUrl + 'quest').pipe(
  //     map((res: Response) => res.json())
  //   )
  // }
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new QuestionField({
        "id": "1",
        "controlType": "radio",
        "key": "Qual o seu comportamento em relação aos seus investimentos?",
        "label": "Qual o seu comportamento em relação aos seus investimentos?",
        "options": [
          {
            "key": "Preservar meu dinheiro sem correr riscos",
            "value": "Preservar meu dinheiro sem correr riscos"
          },
          {
            "key": "Ganhar mais dinheiro, assumindo riscos moderados",
            "value": "Ganhar mais dinheiro, assumindo riscos moderados"
          },
          {
            "key": "Ganhar mais dinheiro, assumindo riscos agressivos",
            "value": "Ganhar mais dinheiro, assumindo riscos agressivos"
          }
        ],
        "required": true,
        "value": ""
      }),

      new QuestionField({
        "id": "2",
        "controlType": "radio",
        "key": "Por quanto tempo você deseja manter os seus investimentos?",
        "label": "Por quanto tempo você deseja manter os seus investimentos?",
        "options": [
          {
            "key": "Até 1 ano",
            "value": "Até 1 ano"
          },
          {
            "key": "De 1 a 3 anos",
            "value": "De 1 a 3 anos"
          },
          {
            "key": "De 3 a 6 anos",
            "value": "De 3 a 6 anos"
          }
        ],
        "required": true,
        "value": ""
      }),

      new QuestionField({
        "id": "3",
        "controlType": "radio",
        "key": "Quantos % desses investimentos você pode precisar em um ano?",
        "label": "Quantos % desses investimentos você pode precisar em um ano?",
        "options": [
          {
            "key": "Acima de 75%",
            "value": "Acima de 75%"
          },
          {
            "key": "De 26% a 74%",
            "value": "De 26% a 74%"
          },
          {
            "key": "Até 25%",
            "value": "Até 25%"
          }
        ],
        "required": true,
        "value": ""
      }),

      new QuestionField({
        "id": "4",
        "title": "Qual sua familiaridade com os tipos de investimentos abaixo? Leve em consideração o valor aplicado nos últimos 2 anos.",
        "controlType": "select",
        "key": "Títulos de renda fixa ou tesouro direto",
        "label": "Títulos de renda fixa ou tesouro direto",
        "options": [
          {
            "key": "Nunca operei",
            "value": "Nunca operei"
          },
          {
            "key": "Opero pouco e não tenho familiaridade",
            "value": "Opero pouco e não tenho familiaridade"
          },
          {
            "key": "Opero eventualmente e conheço os riscos associados",
            "value": "Opero eventualmente e conheço os riscos associados"
          },
          {
            "key": "Opero frequentemente e conheço os riscos associados",
            "value": "Opero frequentemente e conheço os riscos associados"
          }
        ],
        "required": true,
        "value": ""
      }),

      new QuestionField({
        "id": "5",
        "controlType": "select",
        "key": "Fundos de investimento",
        "label": "Fundos de investimento",
        "options": [
          {
            "key": "Nunca operei",
            "value": "Nunca operei"
          },
          {
            "key": "Opero pouco e não tenho familiaridade",
            "value": "Opero pouco e não tenho familiaridade"
          },
          {
            "key": "Opero eventualmente e conheço os riscos associados",
            "value": "Opero eventualmente e conheço os riscos associados"
          },
          {
            "key": "Opero frequentemente e conheço os riscos associados",
            "value": "Opero frequentemente e conheço os riscos associados"
          }
        ],
        "required": true,
        "value": ""
      }),

      new QuestionField({
        "id": "6",
        "controlType": "select",
        "key": "Ações a vista",
        "label": "Ações a vista",
        "options": [
          {
            "key": "Nunca operei",
            "value": "Nunca operei"
          },
          {
            "key": "Opero pouco e não tenho familiaridade",
            "value": "Opero pouco e não tenho familiaridade"
          },
          {
            "key": "Opero eventualmente e conheço os riscos associados",
            "value": "Opero eventualmente e conheço os riscos associados"
          },
          {
            "key": "Opero frequentemente e conheço os riscos associados",
            "value": "Opero frequentemente e conheço os riscos associados"
          }
        ],
        "required": true,
        "value": ""
      }),

      new QuestionField({
        "id": "7",
        "controlType": "select",
        "key": "Aluguel de ações, termos, opções e futuros",
        "label": "Aluguel de ações, termos, opções e futuros",
        "options": [
          {
            "key": "Nunca operei",
            "value": "Nunca operei"
          },
          {
            "key": "Opero pouco e não tenho familiaridade",
            "value": "Opero pouco e não tenho familiaridade"
          },
          {
            "key": "Opero eventualmente e conheço os riscos associados",
            "value": "Opero eventualmente e conheço os riscos associados"
          },
          {
            "key": "Opero frequentemente e conheço os riscos associados",
            "value": "Opero frequentemente e conheço os riscos associados"
          }
        ],
        "required": true,
        "value": ""
      })
    ];

    return questions.sort((a, b) => a.id - b.id);
  }
}
