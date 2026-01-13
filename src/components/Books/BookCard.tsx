import { Book } from "@/types/Book";
import Link from "next/link";

interface BookCardProps {
  book: Book;
  title?: string;
  prev?: boolean;
}

export const BookCard = ({ book, title, prev = false }: BookCardProps) => {
  return (
    <>
      {title && <h2 className="text-3xl font-bold mb-3">{title}</h2>}
      <div className="border rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold ">{book.title}</h3>
            <p className="text-gray-600 mt-1">by {book.author}</p>
          </div>
          <span className="bg-gray-100 text-gray-900 px-3 py-1 rounded-full text-sm">
            {book.year}
          </span>
        </div>

        <div className="mb-4">
          <span className="inline-block bg-gray-100 text-gray-900 text-xs px-2 py-1 rounded mr-2">
            {book.genre}
          </span>
          <span className="text-yellow-600 text-sm">
            {"★".repeat(Math.floor(book.rating))}
            {"☆".repeat(5 - Math.floor(book.rating))}
            <span className="text-gray-500 ml-1">({book.rating})</span>
          </span>
        </div>

        <>
          <p className="text-gray-100 mb-4">{book.description}</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <span>{book.pages} pages</span>
            <span>ID: {book.id}</span>
          </div>
        </>

        <div className="mt-4 pt-4 border-t border-gray-100">
          {prev ? (
            <Link
              href={`/books`}
              className="inline-flex items-center text-yellow-600 hover:text-yellow-400 hover:underline font-medium"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Go back
            </Link>
          ) : (
            <Link
              href={`/books/${book.id}`}
              className="inline-flex items-center text-yellow-600 hover:text-yellow-400 hover:underline font-medium"
            >
              View Details
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
