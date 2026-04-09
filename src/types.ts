export type Page =
  | 'home'
  | 'about'
  | 'services'
  | 'products'
  | 'projects'
  | 'impact'
  | 'partners'
  | 'news'
  | 'donate'
  | 'contact'
  | 'service-farming'
  | 'service-climate'
  | 'service-circular'
  | 'service-export'
  | 'service-empowerment';

export interface NavItem {
  label: string;
  id: Page;
}