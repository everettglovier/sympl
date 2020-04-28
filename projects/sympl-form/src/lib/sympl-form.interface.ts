export interface SymplFormInterface {

}

export interface FormControlInterface {
  label?: string;
  key?: string;
  objectKey?: string;
  name: string;
  index?: any;
  required?: boolean;
  placeholder?: string;
  latName?: string;
  lngName?: string;
  stateName?: string;
  cityName?: string;
  zipName?: string;
  type: string;
  message?: string;
  buttons?: [any];
  options?: [any];
  text?: string;
  maxlength?: number;
  object?: any;
  pattern?: any;
  autocomplete?: any;
  title?: any;
  callback?: any;
  edit?: any;
  hideFields?: boolean;
  multiple?: boolean;
}
