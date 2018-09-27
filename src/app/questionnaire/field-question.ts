import { QuestionBase } from './question-base';

export class QuestionField extends QuestionBase<string> {
  title: string;
  controlType: string;
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
