import * as z from "zod";
import axios from "axios";
import { Chapter } from "@prisma/client";
import { Preview } from "@/components/preview";

interface ChapterDescriptionProps {
  courseId: string;
  chapterId: string;
}

const ChapterDescriptionProps = async ({ courseId, chapterId }: ChapterDescriptionProps) => {
  try {
    const response = await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`);
    const chapterData: Chapter = response.data;

    return (
      <div className="mt-6 border bg-slate-100 rounded-md p-4">
        <div className="font-medium flex items-center justify-between">
          Chapter description
        </div>
        <div className="text-sm mt-2">
          {chapterData.description && <Preview value={chapterData.description} />}
          {!chapterData.description && "No description"}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching chapter data:", error);
    // Handle error appropriately, e.g., display an error message to the user
    return <div>Error fetching chapter data</div>;
  }
};

export default ChapterDescriptionProps;
