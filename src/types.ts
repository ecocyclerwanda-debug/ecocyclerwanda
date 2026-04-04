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
  | 'contact';

export type NavItem = {
  label: string;
  id: Page;
};