export class QuestionBase<T> {
  id: number;
  value: T;
  key: string;
  label: string;
  required: boolean;
  controlType: string;
  title: string;

  constructor(options: {
      id?: number,
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      controlType?: string,
      title?: string
    } = {}) {
    this.id = options.id === undefined ? 1 : options.id;
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
    this.title = options.title || '';
  }
}
