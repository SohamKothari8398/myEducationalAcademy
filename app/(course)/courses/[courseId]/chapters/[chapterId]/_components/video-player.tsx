import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";
import axios from 'axios';
import { cn } from "@/lib/utils";
import { useConfettiStore } from "@/hooks/use-confetti-store";

interface VideoPlayerProps {
  videoUrl: string;
  courseId: string;
  chapterId: string;
  nextChapterId?: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string;
}

const updateProgress = async (courseId: string, chapterId: string) => {
  try {
    // Make a PUT request to the API endpoint
    await axios.put(`/api/courses/${courseId}/chapters/${chapterId}/progress`, {
      isCompleted: true,
    });

    console.log('Chapter progress updated successfully');
  } catch (error) {
    console.error('Error updating chapter progress:', error);
  }
};

export const VideoPlayer = ({
  videoUrl,
  courseId,
  chapterId,
  nextChapterId,
  isLocked,
  completeOnEnd,
  title,
}: VideoPlayerProps) => {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const confetti = useConfettiStore();

  const onEnd = async () => {
    try {
      if (completeOnEnd) {
        await updateProgress(courseId, chapterId);

        if (!nextChapterId) {
          confetti.onOpen();
        }

        toast.success("Progress updated");
        router.refresh();

        if (nextChapterId) {
          router.push(`/courses/${courseId}/chapters/${nextChapterId}`)
        }
      }
    } catch {
      toast.error("Something went wrong");
    }
  }

  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        </div>
      )}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
          <Lock className="h-8 w-8" />
          <p className="text-sm">
            This chapter is locked
          </p>
        </div>
      )}
      {!isLocked && (
        <div className={cn(!isReady && "hidden")}>
          <iframe
            title={title}
            src={videoUrl}
            allowFullScreen
            className={cn("w-full h-full", !isReady && "hidden")}
            onLoad={() => setIsReady(true)}
            onEnded={onEnd}
          />
        </div>
      )}
    </div>
  )
}
