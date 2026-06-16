export const NavMenu = [
  { label: "Beranda", path: "/" },
  { label: "Tentang Kami", path: "/tentang" },
  { label: "Layanan", path: "/layanan" },
  { label: "Proyek", path: "/proyek" },
  { label: "Kontak", path: "/kontak" },
] as const;

export type NavMenuItem = (typeof NavMenu)[number];
