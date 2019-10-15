export interface SymplContextInterface {
  origin: Array<number> | MouseEvent | Element;
  items?: Array<SymplContextItemInterface>;
  width?: 'inherit' | number;
  maxHeight?: number;
  options?: Array<SymplContextItemInterface>;
  component?: any;
  componentOptions?: any;
  caret?: boolean;
  filter?: string;
  overlay?: boolean;
  object?: any;
  onSelection?: any;
  colorPicker?: any;
  align?: string;
  classes?: string;
  handler?( data? ): any;
  onClose?(): any;
}

export interface SymplContextItemInterface {
  type: string | 'item' | 'checkbox' | 'radio' | 'text' | 'file' | 'divider' | 'multiselect';
  object?: any;
  options?: any;
  icon?: string;
  label?: string;
  grid?: boolean;
  handler?( data? ): any;
}
