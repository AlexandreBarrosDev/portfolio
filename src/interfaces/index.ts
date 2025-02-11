export interface MenuItemInterface {
  url: string;
  label: string;
}

export interface MenuSkillInterface {
  imgURL: string;
  imgSize?: number;
  label: string;
}

export interface CardItemInterface {
  imgURL: string;
  imgSize?: number;
  url: string;
  label: string;
  description: string[];
}

export interface ModalItemInterface {
  isOpen: boolean;
  onClose: () => void;
  items: CardItemInterface;
  imgURLs?: string[];
}
export interface ButtonInterface {
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
  label: string;
}
export interface SocialLinkInterface {
  url: string;
  imgURL: string;
  label: string;
}
