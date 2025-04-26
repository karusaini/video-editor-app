"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Progress } from "@/components/ui/progress"; // ShadCN UI
import { Button } from "@/components/ui/button";

export default function VideoUploader() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setVideoFile(file);
      setPreviewURL(URL.createObjectURL(file));

      setProgress(0);
      let value = 0;
      const interval = setInterval(() => {
        value += 10;
        setProgress(value);
        if (value >= 100) clearInterval(interval);
      }, 100);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "video/*": [] },
    maxFiles: 1,
  });

  return (
    <div className="p-8 max-w-3xl mx-auto border-2 border-dashed border-gray-300 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all">
      <div
        {...getRootProps()}
        className="w-full h-64 flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all rounded-xl text-center"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-gray-700 text-lg font-medium">
            📥 Drop the video here...
          </p>
        ) : (
          <div>
            <p className="text-gray-500 text-lg font-semibold">
              🎬 Drag & drop your video
            </p>
            <p className="text-gray-400 text-sm mt-2">
              or click to browse files
            </p>
          </div>
        )}
      </div>

      {progress > 0 && progress < 100 && (
        <div className="mt-6">
          <Progress value={progress} className="h-3 rounded-full" />
          <p className="text-sm text-gray-500 mt-2 text-center">
            Uploading... {progress}%
          </p>
        </div>
      )}

      {videoFile && progress >= 100 && (
        <div className="mt-8 flex flex-col items-center gap-4">
          <video
            src={previewURL!}
            controls
            className="rounded-xl w-full h-80 object-cover shadow-lg"
          />
          <p className="text-md text-gray-700 font-medium">{videoFile.name}</p>
          <Button
            variant="outline"
            className="border-gray-400 hover:border-red-500 hover:text-red-500 transition-all"
            onClick={() => {
              setVideoFile(null);
              setPreviewURL(null);
              setProgress(0);
            }}
          >
            ❌ Remove Video
          </Button>
        </div>
      )}
    </div>
  );
}
