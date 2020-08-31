import {
  Graph,
  Fransisco,
  Zoro,
  Arlene,
  Alex,
  Norma,
  Morris,
  Kylie,
  Ted,
  Wade,
} from '../assets/images';

const project = [
  {
    id: 1,
    title: 'Wireframes',
    owner: 'Francisco Fisher',
    status: 'Active',
    data: [
      {
        id: 1,
        photo: Fransisco,
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
    owner: 'Roronoa Zoro',
    status: 'Pending',
    data: [
      {
        id: 1,
        photo: Zoro,
        name: 'Roronoa Zoro',
        posted: '7 day ago',
        deadline: '27/03/2020',
        title: 'Need a new logo',
        desc:
          'I need a designer for my new website logo. The project is just at the beginning and I need a new logo  before I start coding the website. WHERE MY SAKE!',
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

const searchData = [
  {
    id: 0,
    name: 'Arlene Mckinney',
    photo: Arlene,
    posted: '3 days ago',
    title: 'Create an application',
    desc:
      'We are a young startup from Paris looking for a designer who can help us design a tech oriented application. We are open to proposals.',
    subDesc:
      'You can saw our project here: \n http://zotware.com \n We are working with Figma and Photoshop',
    total: 16,
    price: 2400,
    category: ['UI/UX', 'DESIGN', 'FIGMA', 'PHOTOSHOP'],
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

const messages = [
  {
    id: 0,
    name: 'Alex Marchal',
    photo: Alex,
    newMessage: 'I have some questions about..',
    allMessage: [{}],
    read: true,
  },
  {
    id: 1,
    name: 'Norma Wilson',
    photo: Norma,
    newMessage: 'http://www.warephase.com',
    allMessage: [{}],
    read: false,
  },
  {
    id: 2,
    name: 'Morris Murphy',
    photo: Morris,
    newMessage: 'Hope it will work in the week',
    allMessage: [{}],
    read: true,
  },
  {
    id: 3,
    name: 'Kylie Lane',
    photo: Kylie,
    newMessage: 'Thank you!it really shine with...',
    allMessage: [{}],
    read: false,
  },
  {
    id: 4,
    name: 'Ted Steward',
    photo: Ted,
    newMessage: 'Yes I know',
    allMessage: [{}],
    read: true,
  },
  {
    id: 5,
    name: 'Wade Mccoy',
    photo: Wade,
    newMessage: 'It will be online in 2 days',
    allMessage: [{}],
    read: false,
  },
];

export const initialState = {
  isLogin: true,
  project: project,
  listProject: listProject,
  searchData: searchData,
  messages: messages,
};
