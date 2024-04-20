import * as z from "zod";
import axios from "axios";
import { Chapter } from "@prisma/client";
import { Video } from "lucide-react";

interface ChapterVideoProps {
  courseId: string;
  chapterId: string;
}

const ChapterVideoProps = async ({ courseId, chapterId }: ChapterVideoProps) => {
  try {
    const response = await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`);
    const chapterData: Chapter = response.data;

    return (
      <div className="mt-6 border bg-slate-100 rounded-md p-4">
        <div className="font-medium flex items-center justify-between">
          Chapter video
        </div>
        {!chapterData.videoUrl && (
          <div className="flex items-center justify-center aspect-w-16 aspect-h-9 mt-2">
            <div className="flex items-center justify-center h-full bg-slate-200 rounded-md">
              <Video className="h-10 w-10 text-slate-500" />
            </div>
          </div>
        )}
        {chapterData.videoUrl && (
          <iframe
            src={chapterData.videoUrl}
            title="Chapter Video"
            className="w-full h-full rounded-md"
            style={{ height: '30rem' }}
          ></iframe>
        )}
        {chapterData.videoUrl && (
          <div className="text-xs text-muted-foreground mt-2">
            This is a sample video.
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("Error fetching chapter data:", error);
    // Handle error appropriately, e.g., display an error message to the user
    return <div>Error fetching chapter data</div>;
  }
};

export default ChapterVideoProps;
