import { ILogin } from '../../pages/register/Register';
import { authorize } from '../axios';

export default {
   registerUser(params: ILogin) {
      return authorize.post(`/user/register`, params);
   },
};
