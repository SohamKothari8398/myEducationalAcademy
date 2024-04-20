import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { Preview } from "@/components/preview";
import { Paperclip } from "lucide-react";
import { Banner } from "@/components/banner";
import { Separator } from "@/components/ui/separator";
import { CourseEnrollButton } from "./_components/course-enroll-button";
import { CourseProgressButton } from "./_components/course-progress-button";

const ChapterIdPage = async ({
  params
}: {
  params: { courseId: string; chapterId: string };
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const chapter = await db.chapter.findUnique({
    where: {
      id: params.chapterId,
      courseId: params.courseId,
    },
  });

  if (!chapter) {
    return redirect("/");
  }

  // Fetch course including chapters and attachments
  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc",
        },
      },
      attachments: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  // Required fields check (assuming completion is based on presence of data)
  const requiredFields = [
    chapter.title,
    chapter.description,
    chapter.videoUrl,
  ];

  const attachments = await db.attachment.findMany({
    where: {
      courseId: params.courseId,
    },
  });
  if (attachments) {
    console.log("Attachments Found.");
  }

  if (!attachments) {
    console.error("No attachements found.");
  }

  // Fetch user progress for the current chapter
  const userProgress = await db.userProgress.findUnique({
    where: {
      userId_chapterId: {
        userId,
        chapterId: params.chapterId,
      },
    },
  });

  // Fetch purchase data for the course
  const purchase = await db.purchase.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId: params.courseId,
      },
    },
  });

  if (!chapter || !course) {
    return redirect("/");
  }

  const isComplete = requiredFields.every(Boolean);
  const completionText = isComplete ? "Completed" : `(<span class="math-inline">\{requiredFields.filter(Boolean).length}</span>{requiredFields.length})`;
  const isLocked = !chapter.isFree && !purchase;
  const completeOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div>
      <div>
        {userProgress?.isCompleted && (
          <Banner variant="success" label="You already completed this chapter." />
        )}
        {isLocked && (
          <Banner variant="warning" label="You need to purchase this course to watch this chapter." />
        )}
      </div>
      <div className="flex flex-col max-w-4xl mx-auto pb-20">
        {/* Video section */}
        <div className="font-bold text-center text-2xl underline underline-offset-2 my-4">
          {chapter.title}
        </div>
        <div>
          <Preview value={chapter.description ?? ""} />
        </div>
        <div className="my-4">
          {chapter.videoUrl && (
            <iframe
              width="100%"
              height="400"
              src={chapter.videoUrl}
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              title={chapter.title}
            ></iframe>
          )}
        </div>
      </div>
      <div>
        <div className="p-4 flex flex-col md:flex-row items-center justify-between">
          {purchase ? (
            <div className=" items-center font-bold">
              Course Status <CourseProgressButton
                chapterId={params.chapterId}
                courseId={params.courseId}
                nextChapterId={course.chapters?.find(c => c.position > chapter.position)?.id}
                isCompleted={!!userProgress?.isCompleted}
              />
            </div>

          ) : (
            <CourseEnrollButton
              courseId={params.courseId}
              price={course.price!}
            />
          )}
        </div>
        <Separator />
        <div className="p-4 font-bold">
          Attachment Links are as below :
          {attachments.map((attachment, index) => (
            // <div key={attachment.id} className=" text-blue-600">
            //   {attachment.url}
            // </div>
            <a
              href={attachment.url}
              target="_blank"
              key={attachment.id}
              className="flex items-center p-3 w-full bg-sky-200 border text-xl text-sky-600 mt-4 rounded-md hover:underline"
            >
              <p className="line-clamp-1 flex">
                {index + 1}. {attachment.name} <Paperclip className="ml-4" />
              </p>
            </a>
          ))}
        </div>
      </div>
    </div >
  );
};

export default ChapterIdPage;
