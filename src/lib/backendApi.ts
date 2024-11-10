export interface Book {
  bookId: number;
  title: string;
  isbn13: string;
  languageId: number;
  numberPages: number;
  publicationDate: string;
  publisherID: number;
}

export async function fetchBooks(): Promise<Book[]> {
  return await fetch("https://kindergarten-svelte.ey.r.appspot.com/book")
    .then(res => res.json())
    .then(books => books.slice(0,1000));
}
