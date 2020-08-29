import {Graph, Avatar} from '../assets/images';

const project = [
  {
    id: 1,
    title: 'Wireframes',
    owner: 'Francisco Fisher',
    status: 'Active',
    data: [
      {
        id: 1,
        photo: Avatar,
        name: 'Fransisco Fisher',
        posted: '8 day ago',
        deadline: '28/03/2020',
        title: 'Wireframes',
        desc:
          "I need a designer for my new website. The project is just at the beginning and I need wireframes before I start coding the website. I only want wireframes and I don't want prototype of UI design.",
        category: [
          {
            id: 3,
            category: 'wireframes',
          },
          {
            id: 1,
            category: 'ggwp',
          },
          {
            id: 2,
            category: 'well played',
          },
        ],
        price: '$600',
      },
    ],
  },
  {
    id: 2,
    title: 'Need a new logo',
    owner: 'Amel Rio',
    status: 'Pending',
    data: [
      {
        id: 1,
        photo: Avatar,
        name: 'Amel Rio',
        posted: '7 day ago',
        deadline: '27/03/2020',
        title: 'Need a new logo',
        desc:
          'I need a designer for my new website logo. The project is just at the beginning and I need a new logo  before I start coding the website.',
        category: [
          {
            id: 0,
            category: 'ui/ux design',
          },
          {
            id: 1,
            category: 'logo design',
          },
          {
            id: 2,
            category: 'idk',
          },
          {
            id: 3,
            category: ' graphic design',
          },
        ],
        price: '$690',
      },
    ],
  },
];

const listProject = [
  {
    id: 1,
    totalTitle: 'Total gains',
    totalNumber: '27 k',
    img: null,
  },
  {
    id: 2,
    totalTitle: 'Total projects',
    totalNumber: '80',
    img: Graph,
  },
  {
    id: 3,
    totalTitle: 'Total requests',
    totalNumber: '120',
    img: null,
  },
  {
    id: 4,
    totalTitle: 'Total reviews',
    totalNumber: '64',
    img: null,
  },
];

export const initialState = {
  isLogin: true,
  project: project,
  listProject: listProject,
};
