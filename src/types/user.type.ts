export type userInRecoil = {
  email: string;
  nickName?: string;
  profileImage?: string;
  thumbnailImage?: string;
  loginState: string;
};

export const defaultUserState: userInRecoil = {
  email: '',
  nickName: '',
  profileImage: '',
  thumbnailImage: '',
  loginState: '',
};
