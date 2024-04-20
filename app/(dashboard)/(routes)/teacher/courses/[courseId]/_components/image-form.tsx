"use client";
import * as z from "zod";
import axios from "axios";
import { Pencil, PlusCircle, ImageIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import Image from "next/image";

import { Button } from "@/components/ui/button";

interface ImageFormProps {
  initialData: Course;
  courseId: string;
}

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});

export const ImageForm = ({ initialData, courseId }: ImageFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || "");
  const router = useRouter();

  const toggleEdit = () => setIsEditing((current) => !current);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, values);
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Course image
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.imageUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add an image
            </>
          )}
          {!isEditing && initialData.imageUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit image
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <div className="relative aspect-video mt-2">
          {imageUrl ? (
            <Image
              alt="Image Not Found Server Error"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={imageUrl}
            />
          ) : (
            <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
              <ImageIcon className="h-10 w-10 text-slate-500" />
            </div>
          )}
        </div>
      )}
      {isEditing && (
        <div>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
            className="mt-4 p-2 border rounded-md w-full"
          />
          <button
            onClick={() => onSubmit({ imageUrl })}
            className="mt-2 p-2 bg-blue-500 text-white rounded-md"
          >
            Upload
          </button>
          <div className="text-xs text-red-500 mt-2">
            Use the link below and edit the hash copied from your <span className="text-green-700">viewable google drive image</span>
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            https://drive.google.com/uc?id=|yourGoogleDriveImageHash|
          </div>
        </div>
      )}
    </div>
  );
};
