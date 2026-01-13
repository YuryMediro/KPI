import { BookList } from "@/components/Books/BookList";
import { getBooks } from "@/constants/data";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "All Books | BookCatalog",
    description: "Explore our collection of books (SSR)",
  };
}

export default async function BooksPage() {
  const books = await getBooks();

  return (
    <div className="pl-5 pr-5">
      <h1 className="text-3xl font-bold mb-6"></h1>

      <BookList
        books={books}
        title={"Коллекция книг (SSR)"}
        description={
          "Эта страница рендерится на сервере при каждом запросе (Server-Side Rendering)."
        }
        subtitle={
          "Функция getBooks() вызывается на сервере. Она имитирует асинхронный запрос к API. Результат — полностью готовый HTML, отправляемый браузеру. Это улучшает SEO и первоначальную загрузку."
        }
      />
    </div>
  );
}
