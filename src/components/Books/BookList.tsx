import { Book } from "@/types/Book";
import { BookCard } from "./BookCard";

interface BookListProps {
  books: Book[];
  title?: string;
  description?: string;
  subtitle?: string;
}

export const BookList = ({
  books,
  description,
  subtitle,
  title,
}: BookListProps) => {
  return (
    <section>
      {(title || description || subtitle) && (
        <div className="mb-8">
          {title && <h2 className="text-3xl font-bold mb-3">{title}</h2>}
          {description && (
            <p className="text-gray-300 text-lg">{description}</p>
          )}
          {subtitle && <p className="text-gray-300 text-lg">{subtitle}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book}/>
        ))}
      </div>

      {books.length === 0 && <p>No books found.</p>}
    </section>
  );
};
