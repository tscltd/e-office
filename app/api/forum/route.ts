import forumPosts from "@/data/forumPosts";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(forumPosts);
}
