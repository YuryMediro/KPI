export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">SSG</h1>
      <div className="space-y-6">
        <section>
          <p>
            SSG означает, что страница предварительно рендерится на этапе сборки
            проекта.
          </p>
          <p className="mt-2">
            Эта страница не требует обращения к серверу для рендеринга — она
            полностью статична. Это максимальная производительность и
            кэширование.
          </p>
        </section>

        <section className="p-5 rounded-lg border">
          <h3 className="text-xl font-semibold mb-2">Преимущества SSG:</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Мгновенная загрузка для пользователя.</li>
            <li>Отличная SEO, т.к. контент уже в HTML.</li>
            <li>Минимальная нагрузка на сервер.</li>
            <li>Идеально для страниц, контент которых редко меняется.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-2">Техническая деталь:</h3>
          <p>
            Я использовал экспорт константы export const dynamic =
            'force-static'. Это явное указание Next.js на то, что данная
            страница должна быть статической. В App Router это поведение часто
            является умолчанием, если нет асинхронных запросов данных.
          </p>
        </section>
      </div>
    </div>
  );
}
