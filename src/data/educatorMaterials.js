export const educatorMaterials = [
  {
    id: 'em-1',
    number: '01',
    title: 'Wprowadzenie do programu GADKI',
    type: 'download',
    url: '/downloads/educators/wprowadzenie-gadki.pdf',
    fileSize: '3.5 MB',
    requiresLogin: false,
    description: 'Ogólne informacje o programie i jego celach',
  },
  {
    id: 'em-2',
    number: '02',
    title: 'Scenariusze zajęć - grupa 4-6 lat',
    type: 'download',
    url: '/downloads/educators/scenariusze-4-6.pdf',
    fileSize: '4.2 MB',
    requiresLogin: false,
    description: 'Gotowe scenariusze zajęć dla najmłodszych',
  },
];

export const protectedEducatorMaterials = [
  {
    id: 'pem-1',
    title: 'Formularz raportowania zajęć',
    description: 'Formularz do raportowania przeprowadzonych zajęć',
    requiresLogin: true,
    redirectTo: '/strefa-edukatora/raportowanie',
    icon: 'document',
  },
  {
    id: 'pem-2',
    title: 'Zaawansowane materiały metodyczne',
    description: 'Szczegółowe materiały dla doświadczonych edukatorów',
    requiresLogin: true,
    redirectTo: '/strefa-edukatora/materialy-zaawansowane',
    icon: 'book',
  },
];
