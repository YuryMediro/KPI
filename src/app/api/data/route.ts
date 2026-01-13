import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();

    return NextResponse.json({
      message: "Posts from JSONPlaceholder API",
      data: posts.slice(0, 10),
      total: posts.length,
      source: "https://jsonplaceholder.typicode.com/posts",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch data",
        message: "Unknown error",
      },
      { status: 500 }
    );
  }
}
