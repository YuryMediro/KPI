import { Example1 } from "@/components/patterns/RenderProps/Example1/Example1";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Render Props | BookCatalog",
};

export default async function RenderPropsPage() {

  return (
    <div className="p-4 w-full mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Render Props Pattern
      </h1>
      <Example1 />
    </div>
  );
}
