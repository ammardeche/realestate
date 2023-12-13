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
      id_project: number;
    }
  ];
}
export interface IPost {
  content: string;
  created_at: string;
  id_bloc: number;
  id_post: number;
  id_user: number;
}
export interface IResponse<T> {
  status: string;
  data: T[];
}
