"use client";
import axios from "axios";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modals/confirm-modal";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import { FaRegHandPointLeft } from "react-icons/fa";

interface ActionsProps {
  disabled: boolean;
  courseId: string;
  isPublished: boolean;
};

export const Actions = ({
  disabled,
  courseId,
  isPublished
}: ActionsProps) => {
  const router = useRouter();
  const confetti = useConfettiStore();
  const [isLoading, setIsLoading] = useState(false);


  const onClick = async () => {
    try {
      setIsLoading(true);
      if (isPublished) {
        await axios.patch(`/api/courses/${courseId}/unpublish`);
        toast.success("Course unpublished");
      } else {
        await axios.patch(`/api/courses/${courseId}/publish`);
        toast.success("Course published");
        confetti.onOpen();
      }
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  const onDelete = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`/api/courses/${courseId}`);
      toast.success("Course deleted");
      router.refresh();
      router.push(`/teacher/courses`);
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
        onClick={onClick}
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