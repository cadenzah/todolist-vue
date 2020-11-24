import {
  Root,
  Test,
  NotFound,
} from '../pages';

const routes = [
  {
    path: '/',
    component: Root,
  },
  {
    path: '/test',
    component: Test,
  },
  {
    path: '*',
    component: NotFound,
  }
];

export default routes;
