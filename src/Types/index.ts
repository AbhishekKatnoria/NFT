interface WithLabel {
  label?: string;
}
export interface ButtonProps extends WithLabel{
  variant?: string;
  css?: string;
  children?: any;
}