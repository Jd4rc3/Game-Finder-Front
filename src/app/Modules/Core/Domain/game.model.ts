export interface Game {
  title: string;
  price: number;
  link: string;
  store: string;
  photos: Photo[];
  exchange: string;
}

export interface Photo {
  url: string;
  width: string;
  height: string;
}
