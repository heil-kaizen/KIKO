export interface NavItem {
  label: string;
  href: string;
}

export interface OrbitItemProps {
  src: string;
  index: number;
  total: number;
  radius?: number;
}