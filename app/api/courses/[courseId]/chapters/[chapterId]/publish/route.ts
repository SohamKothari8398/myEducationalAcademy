import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const ownCourse = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId
      }
    });

    if (!ownCourse) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const chapter = await db.chapter.findUnique({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      }
    });

    if (!chapter || !chapter.title || !chapter.description || !chapter.videoUrl) {
      return new NextResponse("Missing required fields", { status: 400 });
    }
    const { videoUrl, isPublished } = await req.json();

    // const isYoutubeUrl = typeof videoUrl === "string" && videoUrl.includes("https://www.youtube.com/embed/");

    // if (!isYoutubeUrl) {
    //   return new NextResponse("Please provide a valid YouTube embed URL", { status: 400 });
    // } This is causing error.

    // Update the chapter's videoUrl and isPublished status in the database
    const updatedChapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        videoUrl: videoUrl,
        isPublished: isPublished || false, // Use provided isPublished or default to false
      }
    });


    return NextResponse.json(updatedChapter);
  } catch (error) {
    console.log("[CHAPTER_PATCH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
