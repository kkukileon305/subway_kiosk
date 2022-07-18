import { menuData } from './data';

const getMenuData = (item) =>
  new Promise((res, rej) => {
    setTimeout(() => res(menuData), Math.random() * 1000);
  });

export default getMenuData;
