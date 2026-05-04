import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blogPath = path.join(process.cwd(), "blog.md");
    const content = await readFile(blogPath, "utf-8");
    return NextResponse.json({ content });
  } catch {
    return NextResponse.json(
      { error: "Blog content is unavailable." },
      { status: 500 },
    );
  }
}
