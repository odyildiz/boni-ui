export interface Photo {
  id: number;
  url: string;
  title: {
    tr: string;
    en: string;
  };
  description: {
    tr: string;
    en: string;
  };
  labelIds: number[];
}

export interface Label {
  id: number;
  nameTr: string;
  nameEn: string;
}