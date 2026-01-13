export interface IPosts {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface IUsers {
  id: string;
  name: string;
  username: string;
  email: string;
}

export interface data {
    posts: IPosts[];
    users: IUsers[];
}
