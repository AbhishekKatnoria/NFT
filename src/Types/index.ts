interface WithLabel {
  label?: string;
}
export interface ButtonProps extends WithLabel {
  variant?: string;
  css?: string;
  children?: any;
}

export interface Button {
  label: string;
  img: string;
}

export interface Image {
  img: string;
  alt?: string;
}

export interface Content {
  heading: string;
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

export interface AiCollectionProp extends Content {
  categories: Categories[];
  cards: Cards[];
}
