"use client";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Eye, LayoutDashboard, Video } from "lucide-react";
import { useState, useEffect } from "react";
import { db } from "@/lib/db";
import { IconBadge } from "@/components/icon-badge";
import { Banner } from "@/components/banner";
import { ChapterTitleForm } from "./_components/chapter-title-form";
import { ChapterDescriptionForm } from "./_components/chapter-description-form";
import { ChapterAccessForm } from "./_components/chapter-access-form";
import { ChapterActions } from "./_components/chapter-actions";
import { ChapterVideoForm } from "./_components/chapter-video-form";
import { NextApiRequest, NextApiResponse } from 'next';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  const chapterId = req.query.chapterId as string;

  try {
    const fetchedChapter = await db.chapter.findUnique({
      where: { id: chapterId },
    });
    if (fetchedChapter) {
      res.status(200).json(fetchedChapter);
    } else {
      res.status(404).json({ error: 'Chapter not found' });
    }
  } catch (error) {
    console.error('Error fetching chapter:', error);
    res.status(500).json({ error: 'Error fetching chapter' });
  }
}

const ChapterIdPage = ({ params }: { params: { courseId: string; chapterId: string } }) => {
  const router = useRouter();
  const [chapter, setChapter] = useState({
    id: '',
    title: '',
    description: '',
    position: 0,
    isPublished: false,
    isFree: false,
    videoUrl: '', // Ensure it's always a string
    courseId: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  useEffect(() => {
    const fetchChapter = async () => {
      try {
        const response = await fetch(`/api/chapters/${params.chapterId}`);
        if (response.ok) {
          const fetchedChapter = await response.json();
          setChapter(fetchedChapter);
        } else {
          throw new Error('Chapter not found');
        }
      } catch (error) {
        console.error('Error fetching chapter:', error);
      }
    };
    fetchChapter();
  }, [params.chapterId, router]);

  const requiredFields = [chapter.title, chapter.description, chapter.videoUrl];
  const completedFields = requiredFields.filter(Boolean).length;
  const totalFields = requiredFields.length;
  const completionText = `(${completedFields}/${totalFields})`;
  const isComplete = requiredFields.every(Boolean);

  const handleBackToCourseSetup = () => {
    router.push(`/teacher/courses/${params.courseId}`);
  };

  return (
    <>
      {!chapter.isPublished && (
        <Banner
          variant="warning"
          label="This chapter is unpublished. It will not be visible in the course"
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/teacher/courses/${params.courseId}`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to course setup
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col gap-y-2">
                <h1 className="text-2xl font-medium">
                  Chapter Creation
                </h1>
                <span className="text-sm text-slate-700">
                  Complete all fields {completionText}
                </span>
              </div>
              <ChapterActions
                disabled={!isComplete}
                courseId={params.courseId}
                chapterId={params.chapterId}
                isPublished={chapter.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-xl">
                  Customize your chapter
                </h2>
              </div>
              <ChapterTitleForm
                initialData={{ title: chapter.title }} // Pass title as an object
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
              <ChapterDescriptionForm
                initialData={{
                  id: chapter.id,
                  title: chapter.title,
                  description: chapter.description || "", // Ensure description is not null
                  position: chapter.position,
                  isPublished: chapter.isPublished,
                  isFree: chapter.isFree,
                  videoUrl: chapter.videoUrl || "", // Ensure videoUrl is not null
                  videoEmbedUrl: "", // Add an empty string for videoEmbedUrl
                  courseId: chapter.courseId,
                  createdAt: chapter.createdAt,
                  updatedAt: chapter.updatedAt,
                }}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={Eye} />
                <h2 className="text-xl">
                  Access Settings
                </h2>
              </div>
              <ChapterAccessForm
                initialData={{
                  id: chapter.id,
                  title: chapter.title,
                  description: chapter.description || "", // Ensure description is not null
                  position: chapter.position,
                  isPublished: chapter.isPublished,
                  isFree: chapter.isFree,
                  videoUrl: chapter.videoUrl || "", // Ensure videoUrl is not null
                  videoEmbedUrl: "", // Add an empty string for videoEmbedUrl
                  courseId: chapter.courseId,
                  createdAt: chapter.createdAt,
                  updatedAt: chapter.updatedAt,
                }}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Video} />
              <h2 className="text-xl">
                Add a video
              </h2>
            </div>
            <ChapterVideoForm
              initialData={{ videoUrl: chapter.videoUrl || "" }} // Pass videoUrl as an object with default empty string
              chapterId={params.chapterId}
              courseId={params.courseId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterIdPage;
