export interface Login {
  name: string;
  password: string;
  email: string;
}

export interface Profile {
  username: string;
  email: string;
  token: string;
  userReference: string;
}
