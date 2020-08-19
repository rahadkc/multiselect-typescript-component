import { Location } from "./location";

export interface ApiInterface {
  count: number,
  currentPage: number,
  iso2?: string | null,
  itemsPerPage: number,
  lat: number | null,
  lon: number | null,
  orderBy?: string,
  pages: number,
  query: string,
  radius: number,
  results: Location[],
  type: string
}