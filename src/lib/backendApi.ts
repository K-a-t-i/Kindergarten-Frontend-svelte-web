import { env } from '$env/dynamic/private';

export interface Book {
  bookId: number;
  title: string;
  isbn13: string;
  languageId: number;
  numberPages: number;
  publicationDate: string;
  publisherID: number;
}

export const API_URL = env.Environment == "Vercel_Production"
  ? "https://kindergarten-svelte.ey.r.appspot.com"
  : "http://localhost:8081";

export async function fetchBooks(): Promise<Book[]> {
  return await fetch(API_URL + "/book")
    .then(res => res.json())
    .then(books => books.slice(0,1000));
}

export async function fetchBook(bookId: number): Promise<Book> {
  return await fetch(API_URL + `/book/${bookId}`)
    .then(res => res.json());
}
