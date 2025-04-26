"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Download, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress"; // Make sure you have this component!

export default function RenderControls() {
  const [isRendering, setIsRendering] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleRender = () => {
    setIsRendering(true);
    setIsRendered(false);
    setProgress(0);

    // Mock render progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsRendering(false);
          setIsRendered(true);
          return 100;
        }
        return prev + 5; // Increase 5% every step
      });
    }, 150); // Every 150ms
  };

  const handleDownload = () => {
    alert("📥 Downloading your rendered video...");
  };

  return (
    <div className="p-4 md:p-6 bg-gray-50 rounded-xl border shadow-sm space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">🎬 Preview & Render</h2>

      {/* Video Preview */}
      <div className="relative w-full h-[250px] sm:h-[400px] bg-black rounded-xl overflow-hidden flex items-center justify-center">
        <video
          className="w-full h-full object-contain"
          controls
          src="/sample.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Render Progress */}
      {isRendering && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-600">
            Rendering... {progress}%
          </p>
          <Progress value={progress} />
        </div>
      )}

      {/* Success Message */}
      {isRendered && (
        <div className="flex items-center gap-2 text-green-600 font-semibold">
          <CheckCircle2 className="h-5 w-5" />
          Render Complete!
        </div>
      )}

      {/* Buttons (Centered) */}
      <div className="flex justify-center items-center gap-4 flex-wrap">
        <Button
          onClick={handleRender}
          disabled={isRendering}
          className="flex items-center gap-2"
        >
          {isRendering ? (
            <>
              <Loader2 className="animate-spin h-5 w-5" />
              Rendering...
            </>
          ) : (
            <>🚀 Render Video</>
          )}
        </Button>

        {isRendered && (
          <Button
            variant="outline"
            onClick={handleDownload}
            className="flex items-center gap-2"
          >
            <Download className="h-5 w-5" />
            Download
          </Button>
        )}
      </div>
    </div>
  );
}
