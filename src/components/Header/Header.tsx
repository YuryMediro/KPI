import { NAV_ITEMS } from "@/constants/routes";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 mb-5">
      <nav className="container mx-auto">
        <ul className="flex space-x-6">
          {NAV_ITEMS.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="hover:text-yellow-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
