"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { FaRegHandPointLeft } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useConfettiStore } from "@/hooks/use-confetti-store";

interface ChapterActionsProps {
  disabled: boolean;
  courseId: string;
  chapterId: string;
  isPublished: boolean;
};

export const ChapterActions = ({
  disabled,
  courseId,
  chapterId,
  isPublished
}: ChapterActionsProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const confetti = useConfettiStore();

  const onClick = async (courseId: string, chapterId: string, isPublished: boolean) => {
    try {
      setIsLoading(true);
      const data = { isPublished: !isPublished };
      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/unpublish`);
        toast.success("Chapter unpublished");
      } else {
        await axios.patch(`/api/courses/${courseId}/chapters/${chapterId}/publish`, data);
        toast.success("Chapter published");
        confetti.onOpen();
      }
      router.refresh();
    } catch (error) {
      toast.error("Error Publishing Chapter : Check all fields");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/courses/${courseId}/chapters/${chapterId}`);
      toast.success("Chapter deleted");
      router.refresh();
      router.push(`/teacher/courses/${courseId}`);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  const goBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center gap-x-2">
      <Button
        onClick={() => onClick(courseId, chapterId, isPublished)}
        variant="outline"
        size="sm"
        className=" hover:bg-blue-950 hover:text-white font-bold"
      >
        {isPublished ? "Unpublish" : "Publish"}
      </Button>
      <Button size="sm" onClick={goBack} className="bg-black text-white hover:bg-stone-600">
        <FaRegHandPointLeft size={25} />
      </Button>
      <ConfirmModal onConfirm={onDelete}>
        <Button size="sm" disabled={isLoading} className=" hover:bg-red-950">
          <RiDeleteBin5Line size={25} />
        </Button>
      </ConfirmModal>
    </div>
  )
}