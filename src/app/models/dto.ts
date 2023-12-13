export interface INotification {
  id: string;
  title: string;
  body: string;
}

export interface ILoginResponse {
  status: string;
  data: [
    {
      token: string;
      id_bloc: number;
      id_user: number;
    }
  ];
}
