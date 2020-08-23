import {Graph} from '../assets/images';

const project = [
  {
    id: 1,
    title: 'Wireframes',
    owner: 'Francisco Fisher',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Need a new logo',
    owner: 'Amel Rio',
    status: 'Pending',
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
    totalTitle: 'Total Reviews',
    totalNumber: '64',
    img: null,
  },
];

export const initialState = {
  isLogin: true,
  project: project,
  listProject: listProject,
};
