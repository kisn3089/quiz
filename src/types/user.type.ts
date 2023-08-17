export type userInRecoil = {
  email: string;
  nickName?: string;
  thumbnailImage?: string;
  loginState: string;
  token?: string;
};

export const defaultUserState: userInRecoil = {
  email: "",
  nickName: "",
  thumbnailImage: "",
  loginState: "",
  token: "",
};
