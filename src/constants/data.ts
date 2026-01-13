import { Book } from "@/types/Book";

export const books: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Classic",
    description:
      "A story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.",
    pages: 218,
    rating: 4.2,
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Classic",
    description:
      "A novel about the serious issues of rape and racial inequality in the American South.",
    pages: 324,
    rating: 4.5,
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "Dystopian",
    description:
      "A dystopian social science fiction novel about totalitarian surveillance and thought control.",
    pages: 328,
    rating: 4.3,
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
    description:
      "A romantic novel of manners that depicts the emotional development of protagonist Elizabeth Bennet.",
    pages: 432,
    rating: 4.4,
  },
  {
    id: "5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Coming-of-Age",
    description:
      "Story of Holden Caulfield and his experiences in New York City after being expelled from prep school.",
    pages: 277,
    rating: 3.8,
  },
  {
    id: "6",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    description:
      "A fantasy novel about the adventures of hobbit Bilbo Baggins in Middle-earth.",
    pages: 310,
    rating: 4.3,
  },
  {
    id: "7",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    year: 1953,
    genre: "Dystopian",
    description:
      "A dystopian novel about a future American society where books are outlawed and 'firemen' burn them.",
    pages: 158,
    rating: 4.0,
  },
  {
    id: "8",
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure",
    description:
      "The voyage of the whaling ship Pequod, commanded by Captain Ahab in search of the white whale Moby Dick.",
    pages: 635,
    rating: 3.5,
  },
];

export async function getBooks(): Promise<Book[]> {
  await new Promise(resolve => setTimeout(resolve, 500)); 
  return books;
}

export async function getBookById(id: string): Promise<Book | null> {
  await new Promise(resolve => setTimeout(resolve, 500));
  const book = books.find(book => book.id === id);
  return book || null;
}