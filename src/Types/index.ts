interface LayoutProp {
  layout: boolean;
}
interface WithLabel {
  label?: string;
}
export interface ButtonProps extends WithLabel {
  variant?: string;
  css?: string;
  children?: any;
}

export interface Button extends Image {
  label: string;
}

export interface Image {
  img?: string;
  alt?: string;
}

export interface Content extends Image {
  heading?: string;
  subHeading?: string;
  desc?: string;
  btns?: Button[];
}

export interface BannerProp {
  content: Content;
  images: Image[];
}

export interface Categories {
  title: string;
}

export interface Cards extends Image {
  name: string;
  like: string;
  price: string;
}

export interface AiCollectionProp extends Content, LayoutProp {
  categories?: Categories[];
  cards: Cards[];
}

export interface DefinitionProps extends Categories {
  card: Content[];
}
