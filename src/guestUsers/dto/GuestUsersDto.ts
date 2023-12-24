export interface GuestUserLoginData {
  userId: string;
  userName: string;
  isSocial: boolean;
  avatar: string;
  loginType: string;
  coin: number;
}

export interface tranferUserRequestBody {
  guestId: string;
  userId: string;
  userName: string;
  isSocial: boolean;
  avatar: string;
  loginType: "FACEBOOK" | "GMAIL" | "APPLE";
}
