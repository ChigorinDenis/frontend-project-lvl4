import Cookies from 'js-cookie';
import faker from 'faker';

const auth = () => {
  if (Cookies.get('name') === undefined) {
    const randomUserName = faker.name.findName();
    Cookies.set('name', randomUserName);
  }
  const user = Cookies.get('name');
  return user;
};

export default auth;
