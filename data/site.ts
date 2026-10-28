/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://example.com',
  meta: {
    title: 'Esteban Puerto Rojas | Estudiante de Ingeniería de Sistemas',
    description:
      'Portafolio de Esteban Puerto Rojas, estudiante de Ingeniería de Sistemas en la Universidad El Bosque, interesado en programación y ciberseguridad.',
  },
  hero: {
    name: 'Esteban Puerto Rojas',
    role: 'Estudiante de Ingeniería de Sistemas',
    tagline:
      'Aprendiendo a construir software con buenas bases, con especial interés en ciberseguridad.',
    contact: 'Abierto a proyectos, prácticas y colaboraciones.',
    avatarSrc: '/Avatar.png',
    avatarAlt: 'Esteban Puerto Rojas',
  },
  about: {
    paragraphs: [
      'Tengo 18 años, nací en Duitama y actualmente vivo en Bogotá, donde curso cuarto semestre de Ingeniería de Sistemas en la Universidad El Bosque.',
      'Me apasiona la programación y la ciberseguridad, y estoy en un momento de mi carrera enfocado en aprender, experimentar y construir proyectos que me ayuden a crecer como desarrollador.',
      {
        heading: 'Intereses',
        bullets: [
          'Programación y desarrollo de software',
          'Ciberseguridad',
          'Videojuegos',
          'Fútbol',
          'Música',
        ],
      },
    ],
  },
  evidences: {
    modelado: {
      title: 'Modelado',
      paragraphs: [
        'En esta sección, se encuentran las evidencias de los talleres sobre MER, MER extendido y reducción a tablas.',
      ],
      links: [
        {
          title: 'Modelo ER Peter Chen',
          url: 'https://n9.cl/6t4v9',
          description:
            'En este link, se encuentra el primero modelo ER sobre jugadores, clubes de futbol, y tabla de clasificación.',
        },
        {
          title: 'Reducción a tablas',
          url: 'https://n9.cl/ppz8q',
          description:
            'En este link, se encuentra el modelo de reducción a tablas de un modelo ER diseñado en clase.',
        },
        {
          title: 'Modelo ER, ER extendido y reducción a tablas',
          url: 'https://n9.cl/7n082t',
          description:
            'En este link, se encuentran los 3 modelos que corresponden a un contexto de aerolíneas, vuelos y aviación.',
        },
        {
          title: 'Reducción a tablas de una biblioteca',
          url: 'https://n9.cl/wsn7i',
          description:
            'En este link se encuentra la reducción a tablas de un modelo ER de una biblioteca.',
        },
      ],
    },
    normalizacion: {
      title: 'Normalización',
      paragraphs: [
        'En esta sección, se encuentran las evidencias de los talleres sobre modelización.',
      ],
      links: [],
    },
    sql: {
      title: 'SQL',
      paragraphs: [
        'En esta sección, se encuentran las evidencias de los trabajos y talleres sobre SQL.',
      ],
      links: [],
    },
    proyecto: {
      title: 'Proyecto',
      paragraphs: [
        'En esta sección, se encuentran las evidencias de los entregables del proyecto final.',
      ],
      links: [
        {
          title: 'Primera versión del proyecto',
          url: 'https://n9.cl/6um4z',
          description:
            'En este link se encuentra el primer draw de los modelos del proyecto (primeras versiones).',
        },
        {
          title: 'Segundo draw proyecto',
          url: 'https://n9.cl/xmqkc',
          description:
            'En este link, se encuentra el segundo draw con el model ER, el extendido, y la reducción a tablas de los modelos del proyecto final.',
        },
      ],
    },
  },
  experiences: [],
  featuredProjects: [],
  projectArchivePage: {
    title: 'Proyectos',
    description: 'Archivo de proyectos: aún en construcción.',
    intro: 'Aquí iré agregando los proyectos que desarrolle a lo largo de mi carrera.',
  },
  projectArchive: [],
  contact: {
    email: 'epuertor@unbosque.edu.co',
    github: 'https://github.com/Puerto314',
    instagram: 'https://instagram.com/puerto314',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
