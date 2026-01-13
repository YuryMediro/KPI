import { data } from "@/types/JsonPlaceholder";
import { notFound } from "next/navigation";

export async function getPosts(): Promise<data> {
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";
  try {
    const response = await fetch(baseUrl, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.log(error);
    notFound();
  }
}

export async function getUsers(): Promise<data> {
  const baseUrl = "https://jsonplaceholder.typicode.com/users";
  try {
    const response = await fetch(baseUrl, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.log(error);
    notFound();
  }
}
