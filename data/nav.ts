export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

export const navLinks: NavItem[] = [
  { label: 'About', href: '/#about' },
  {
    label: 'Evidencias',
    children: [
      { label: 'Modelado', href: '#' },
      { label: 'Normalización', href: '#' },
      { label: 'SQL', href: '#' },
      { label: 'Proyecto', href: '#' },
    ],
  },
];

// Botón de video de presentación (separado del menú normal, ver SideNav.astro)
export const presentationVideo = {
  label: 'Video de presentación',
  href: '#', // TODO: reemplaza con el link real de tu video (YouTube, Drive, etc.)
};