import { BookCard } from "@/components/Books/BookCard";
import { books, getBookById } from "@/constants/data";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const book = await getBookById(id);

  if (!book) {
    return { title: "Book Not Found" };
  }

  return {
    title: `${book.title} | BookCatalog`,
    description: `Details about the book: ${book.title}`,
  };
}

export default async function BookPage({ params }: Props) {
  const { id } = await params;
  const book = await getBookById(id);

  if (!book) {
    notFound();
  }

  return (
    <div className="pl-5 pr-5">
      <BookCard
        book={book}
        title={
          "Эта страница (SSG) была сгенерирована на этапе сборки благодаря функции generateStaticParams."
        }
        prev={true}
      />
    </div>
  );
}
