import About from "@/components/About/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | BookCatalog",
};

export const dynamic = "force-static";

export default function AboutPage() {
  return <About />;
}
