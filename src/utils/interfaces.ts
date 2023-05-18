export interface cardProps {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  },
  location: {
    name: string;
    url: string;
  },
  image: string;
  episode: string[],
  url: string;
  created: string;
}

export interface infoType {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}