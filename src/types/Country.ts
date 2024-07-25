export type RegionType =
  | ''
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania';

export interface Country {
  borders: string[];
  capital: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  region: RegionType;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  area: number;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  tld: string[];
  cca3: string;
}
