
export interface Program {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Campus {
  id: string;
  name: string;
  address: string;
  phone: string;
  image: string;
  email: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  summary: string;
  image: string;
}
