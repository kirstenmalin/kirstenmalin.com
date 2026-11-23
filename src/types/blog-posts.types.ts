export type PostContent = {
  component: string;
  props: {
    [key: string]: string;
  } & {
    children?: string | PostContent;
  }
};

export type PostObject = {
  post_id: number;
  date: any;
  slug: string;
  title: string;
  content: string | (string | PostContent)[];
};

export type PostArray = [
  PostObject['post_id'],
  PostObject['date'],
  PostObject['slug'],
  PostObject['title'],
  PostObject['content']
];
