"use client";
import * as z from "zod";
import axios from "axios";
import { Pencil, PlusCircle, Video } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Chapter } from "@prisma/client";
import { Button } from "@/components/ui/button";

interface ChapterVideoFormProps {
  initialData: Chapter;
  courseId: string;
  chapterId: string;
}

const formSchema = z.object({
  videoUrl: z.string().min(1),
});

export const ChapterVideoForm = ({
  initialData,
  courseId,
  chapterId,
}: ChapterVideoFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newVideoUrl, setNewVideoUrl] = useState(initialData.videoUrl || "");
  const router = useRouter();

  const toggleEdit = () => setIsEditing((current) => !current);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}`, values);
      toast.success("Chapter updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Chapter video
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && (
            <>Cancel</>
          )}
          {!isEditing && !initialData.videoUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a video
            </>
          )}
          {!isEditing && initialData.videoUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit video
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div className="relative flex items-center justify-center aspect-w-16 aspect-h-9 mt-2">
          {!initialData.videoUrl ? (
            <div className="flex items-center justify-center h-full bg-slate-200 rounded-md">
              <Video className="h-10 w-10 text-slate-500" />
            </div>
          ) : (
            <iframe
              src={initialData.videoUrl}
              title="Chapter Video"
              className="w-full h-full rounded-md"
              style={{ height: '30rem' }}
            ></iframe>
          )}
        </div>
      )}
      {isEditing && (
        <div>
          <input
            type="text"
            value={newVideoUrl}
            onChange={(e) => setNewVideoUrl(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mt-4"
          />
          <button
            onClick={() => onSubmit({ videoUrl: newVideoUrl })}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          >
            Update Video URL
          </button>
          <div className="text-xs text-muted-foreground mt-2">
            This is a default youtube url just take the hash from your youtube url which is <strong>https://www.youtube.com/watch?v=<span className=" text-green-500">hashIshere</span></strong> <br /> and paste it here in the default url <strong>https://www.youtube.com/embed/<span className=" text-green-500">theHashFromYoutbeVideoUrl</span></strong>
          </div>
        </div>
      )}
      {initialData.videoUrl && !isEditing && (
        <div className="text-xs text-muted-foreground mt-2">
          This is a sample video please edit the url.
        </div>
      )}
    </div>
  );
};
