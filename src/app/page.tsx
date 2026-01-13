import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-center p-5">
      <h1 className="text-4xl font-bold mb-6">
        📚 Демо-проект Next.js для KPI
      </h1>
      <p className="text-lg mb-8">
        Этот проект демонстрирует функции Next.js:
        <br />
        App Router, SSR, SSG, API Routes, Metadata и оптимизации.
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">
            Реализованные концепции:
          </h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>App Router.</strong>
            </li>
            <li>
              <strong>SSR (Server-Side Rendering)</strong> - страница '/books'
              рендерится на сервере при каждом запросе.
            </li>
            <li>
              <strong>SSG (Static Site Generation)</strong> - страница '/about'
              и '/books/[id]' собрана на этапе сборки.
            </li>
            <li>
              <strong>API Routes</strong> - эндпоинт '/api/data'.
            </li>
            <li>
              <strong>Metadata API</strong> - SEO-теги в 'layout.tsx' и на
              страницах.
            </li>
            <li>
              <strong>Оптимизации</strong> - компоненты 'Image', 'Link',
              'Шрифты'
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={300}
            height={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}
