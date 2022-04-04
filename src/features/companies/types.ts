import { City, Speciality } from 'types';

export interface CompanyEntity {
  id: number;
  title: string;
  logoUrl: string;
  backgroundUrl: string;
  specialities: Array<Speciality>;
  specialityIds: number[];
  city: City;
}

export interface CompanyParams {
  q?: string;
  cityIds?: number[];
  specialityIds?: number[];
}

export interface CompanyList {
  items: CompanyEntity[];
  offset: number;
  limit: number;
  total: number;
}