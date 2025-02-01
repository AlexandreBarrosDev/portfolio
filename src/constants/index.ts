import { MenuItemInterface, CardItemInterface, InputInterface, SocialLinkInterface, MenuSkillInterface } from '@/interfaces';

export const menuItems: MenuItemInterface[] = [
  {
    url: '/',
    label: 'Home',
  },
  {
    url: '/about',
    label: 'About',
  },
  {
    url: '/skills',
    label: 'Skills',
  },
  {
    url: '/projects',
    label: 'Projects',
  },
  {
    url: '/contact',
    label: 'Contact',
  },
];

export const skillItems: MenuSkillInterface[] = [
  {
    imgURL: '/html5.svg',
    label: 'HTML',
  },
  {
    imgURL: '/css3.svg',
    label: 'CSS',
  },
  {
    imgURL: '/javascript.svg',
    label: 'JavaScript',
  },
  {
    imgURL: '/react.svg',
    label: 'React',
  },
  {
    imgURL: '/nextdotjs.svg',
    label: 'Next.js',
  },
  {
    imgURL: '/typescript.svg',
    label: 'TypeScript',
  },
  {
    imgURL: '/tailwindcss.svg',
    label: 'Tailwind',
  },
  {
    imgURL: '/figma.svg',
    label: 'Figma',
  },
  {
    imgURL: '/git.svg',
    label: 'Git',
  },
];

export const projectItems: CardItemInterface[] = [
  {
    imgURL: '/figma.svg',
    url: '#project1',
    label: 'Project 1',
    description: [
      'Description 1',
      'Description 2',
      'Description 3',
      'Description 4',
    ],
  },
  {
    imgURL: '/figma.svg',
    url: '#project2',
    label: 'Project 2',
    description: [
      'Description 1',
      'Description 2',
      'Description 3',
      'Description 4',
    ],
  },
  {
    imgURL: '/figma.svg',
    url: '#project3',
    label: 'Project 3',
    description: [
      'Description 1',
      'Description 2',
      'Description 3',
      'Description 4',
    ],
  },
  {
    imgURL: '/figma.svg',
    url: '#project4',
    label: 'Project 4',
    description: [
      'Description 1',
      'Description 2',
      'Description 3',
      'Description 4',
    ],
  },
];

export const input: InputInterface[] = [
  {
    htmlFor: 'name',
    label: 'Nome',
    type: 'name',
    id: 'name',
    name: 'name',
    placeholder: 'Seu nome...',
  },
  {
    htmlFor: 'email',
    label: 'Email',
    type: 'email',
    id: 'email',
    name: 'email',
    placeholder: 'Seu email...',
  },
];

export const socialLink: SocialLinkInterface[] = [
  {
    url: 'mailto: alexandrebarros.dev@gmail.com',
    imgURL: 'bx-envelope.svg',
    label: 'alexandrebarros.dev@gmail.com',
  },
  {
    url: 'tel: 55+(47)996358544',
    imgURL: 'bxl-whatsapp.svg',
    label: '55+ (47)99635-8544',
  },
  {
    url: 'https://github.com/AlexandreBarrosDev',
    imgURL: 'bxl-github.svg',
    label: 'Github',
  },
  {
    url: 'https://www.instagram.com/alexandrebarros.dev/',
    imgURL: 'bxl-instagram.svg',
    label: 'Instagram',
  },
]
