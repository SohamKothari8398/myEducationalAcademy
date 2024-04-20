"use client";
import { useState } from "react";
import axios from "axios";
import { PlusCircle, File, Loader2, Trash2, ExternalLink } from "lucide-react";
import toast from "react-hot-toast";
import { Attachment, Course } from "@prisma/client";
import { Button } from "@/components/ui/button";

interface AttachmentFormProps {
  initialData: Course & { attachments: Attachment[] };
  courseId: string;
}

export const AttachmentForm = ({
  initialData,
  courseId,
}: AttachmentFormProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [attachmentLink, setAttachmentLink] = useState<string | null>(null);
  const [attachmentName, setAttachmentName] = useState<string | null>(null);

  const toggleEdit = () => setIsEditing((current) => !current);

  const onSubmit = async () => {
    try {
      if (attachmentLink && attachmentName) {
        await axios.post(`/api/courses/${courseId}/attachments`, { url: attachmentLink, name: attachmentName });
        toast.success("Attachment added");
        toggleEdit();
        window.location.reload(); // Reload the page
      } else {
        toast.error("Attachment link is empty");
      }
    } catch (error) {
      console.error("Error adding attachment:", error);
      toast.error("Failed to add attachment");
    }
  };

  const onDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await axios.delete(`/api/courses/${courseId}/attachments/${id}`);
      toast.success("Attachment deleted");
      window.location.reload(); // Reload the page
    } catch (error) {
      console.error("Error deleting attachment:", error);
      toast.error("Failed to delete attachment");
    } finally {
      setDeletingId(null);
    }
  };

  const onViewLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Full Course Attachment
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add a file
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <>
          {initialData.attachments.length === 0 && (
            <p className="text-sm mt-2 text-slate-500 italic">
              No attachments yet
            </p>
          )}
          {initialData.attachments.length > 0 && (
            <div className="space-y-2">
              {initialData.attachments.map((attachment) => (
                <div
                  key={attachment.id}
                  className="flex items-center p-3 w-full bg-sky-100 border-sky-200 border text-sky-700 rounded-md"
                >
                  <File className="h-4 w-4 mr-2 flex-shrink-0" />
                  <p className="text-xs line-clamp-1">
                    {attachment.name}
                  </p>
                  {deletingId === attachment.id && (
                    <div>
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  )}
                  {deletingId !== attachment.id && (
                    <button
                      onClick={() => onDelete(attachment.id)}
                      className="ml-auto hover:opacity-75 hover:scale-125 transition"
                    >
                      <Trash2 color="red" />
                    </button>
                  )}
                  <div className="ml-auto">
                    <button
                      onClick={() => onViewLink(attachment.url)} // Updated onClick handler
                      className="hover:opacity-75 hover:scale-125 transition"
                    >
                      <ExternalLink color="black" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {isEditing && (
        <div>
          <div className="text-xs text-muted-foreground mt-4">
            Add anything your students might need to complete the course.
          </div>
          <div className="mt-4 items-center flex flex-col border bg-slate-100 rounded-md p-4">
            <div className="font-medium flex text-start justify-start">
              PDF Attachment Link from Google Drive or Uploadthing Account
            </div>
            <div className="font-medium flex text-start justify-start mt-4">
              Attachment URL
            </div>
            <input
              type="text"
              value={attachmentLink || ''}
              onChange={(e) => setAttachmentLink(e.target.value)}
              className="mt-2 p-2 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <div className="font-medium flex text-start justify-start mt-4">
              Attachment Name
            </div>
            <input
              type="text"
              value={attachmentName || ''}
              onChange={(e) => setAttachmentName(e.target.value)}
              className="mt-2 p-2 w-full bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            <div className="text-xs text-orange-500 mt-4">
              Only the shareable PDF attachment link from your Google Drive or Uploadthing account for further processing.
            </div>
            <Button variant="success" className="mt-4" onClick={onSubmit}>
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
