import { r as redirect } from "../../chunks/index.js";
async function fetchBooks() {
  return await fetch("http://localhost:8081/book").then((res) => res.json()).then((books) => books.slice(0, 1e3));
}
const load = async (event) => {
  if (!await event.locals.auth()) {
    redirect(302, "/auth/signin");
  }
  return {
    books: await fetchBooks()
  };
};
export {
  load
};
