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
  alt: string;
}

export interface Content {
  heading: string;
  subHeading: string;
  btns: Button[];
}

export interface BannerProps {
  content: Content;
  images: Image[];
}
