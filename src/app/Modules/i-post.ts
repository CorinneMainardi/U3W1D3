export interface iPost {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  active: boolean;
}

export interface iJSONresponse {
  posts: iPost[];
  total: number;
  skip: number;
  limit: number;
}
