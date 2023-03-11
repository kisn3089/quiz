import { atom } from 'recoil';
import { defaultUserState, userInRecoil } from '../types/user.type';

export const userState = atom<userInRecoil>({
  key: 'userState',
  default: defaultUserState,
});
