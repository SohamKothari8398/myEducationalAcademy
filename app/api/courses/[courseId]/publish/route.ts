import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const course = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
      include: {
        chapters: true,
      }
    });

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    const hasPublishedChapter = course.chapters.some((chapter) => chapter.isPublished);

    if (!course.title || !course.description || !course.imageUrl || !course.categoryId) {
      alert("Missing Fileds");
      return new NextResponse("Missing required fields", { status: 401 });
    }

    // Check for YouTube video URLs and embed them using <iframe>
    const chaptersWithYouTubeVideos = course.chapters.filter(chapter => chapter.videoUrl?.includes("youtube.com"));

    // Embed YouTube videos using <iframe> and store the embed URLs in your database
    for (const chapter of chaptersWithYouTubeVideos) {
      const embedUrl = getYouTubeEmbedUrl(chapter.videoUrl);
      if (embedUrl) {
        await db.chapter.update({
          where: { id: chapter.id },
          data: { videoUrl: embedUrl }, // Update to use videoUrl
        });
      }
    }

    // Publish the course
    const publishedCourse = await db.course.update({
      where: {
        id: params.courseId,
        userId,
      },
      data: {
        isPublished: true,
      }
    });

    return NextResponse.json(publishedCourse);
  } catch (error) {
    console.log("[COURSE_ID_PUBLISH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

// Function to get YouTube embed URL
function getYouTubeEmbedUrl(videoUrl: string | null): string | null {
  // Extract video ID from YouTube URL
  const videoId = videoUrl?.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (videoId) {
    // Return embed URL with the video ID
    return `https://www.youtube.com/embed/${videoId[1]}`;
  } else {
    return null; // Return null if video URL is null or not a YouTube URL
  }
}
