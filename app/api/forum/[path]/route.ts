
import forumPosts from "@/data/forumPosts";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET(req: NextRequest, context: { params: { path: string } }) {
  const { path } = context.params;

  const post = forumPosts.find(p => p.path === path);

  if (!post) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
