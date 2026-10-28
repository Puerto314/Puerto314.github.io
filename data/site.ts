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
        'En esta sección, se encuentran las evidencias de los talleres sobre MER, MER extendido, y Modelo Relacional',
      ],
      links: [
        {
          title: 'Ver diagrama MER',
          url: 'https://www.youtube.com/watch?v=QX8DgRrC4Zc',
          description: 'Este link lleva a ver el diagrama hecho en draw.',
        },
        {
          title: 'Ver diagrama de reducción',
          url: 'https://www.youtube.com/watch?v=5l2QnK6CjQk',
          description: 'Este link lleva a ver el diagrama hecho en draw.',
        },
      ],
      linkText: 'Ver diagrama MER',
      linkUrl: 'https://www.youtube.com/watch?v=QX8DgRrC4Zc',
      linkDescription: 'Este link lleva a ver el diagrama hecho en draw.',
    },
    normalizacion: {
      title: 'Normalización',
      paragraphs: [
        'En esta sección, se encuentran las evidencias de los talleres sobre modelización',
      ],
      links: [
        {
          title: 'Ver explicación de normalización',
          url: 'https://www.youtube.com/watch?v=7m9o1T5HkXs',
          description: 'Este link lleva a ver la explicación de normalización en YouTube.',
        },
        {
          title: 'Ver ejemplo de normalización',
          url: 'https://www.youtube.com/watch?v=Z5JqfS8p8aQ',
          description: 'Este link lleva a ver un ejemplo práctico de normalización en YouTube.',
        },
      ],
    },
    sql: {
      title: 'SQL',
      paragraphs: [
        'En esta sección, se encuentran las evidencias de los trabajos y talleres sobre SQL',
      ],
      links: [
        {
          title: 'Ver video de SQL',
          url: 'https://www.youtube.com/watch?v=F7I8dM3W1Ak',
          description: 'Este link lleva a ver la explicación de SQL en YouTube.',
        },
        {
          title: 'Ver práctica de consultas SQL',
          url: 'https://www.youtube.com/watch?v=H7Wv8yY3mUM',
          description: 'Este link lleva a ver una práctica de consultas SQL en YouTube.',
        },
      ],
    },
    proyecto: {
      title: 'Proyecto',
      paragraphs: [
        'En esta sección, se encuentran las evidencias de los entregables del proyecto final',
      ],
      links: [
        {
          title: 'Ver presentación del proyecto',
          url: 'https://www.youtube.com/watch?v=4d5E3u7NxxU',
          description: 'Este link lleva a ver la presentación del proyecto en YouTube.',
        },
        {
          title: 'Ver resumen del proyecto',
          url: 'https://www.youtube.com/watch?v=Qm2wR5v3sC8',
          description: 'Este link lleva a ver el resumen del proyecto en YouTube.',
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
