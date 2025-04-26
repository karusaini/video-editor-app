"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AudioManager() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAudioFile(file);
      setAudioURL(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
        <span role="img" aria-label="Audio">
          🎵
        </span>{" "}
        Audio Manager
      </h2>

      {/* Upload Audio Section */}
      <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-md shadow-sm border border-gray-300">
        <Input
          type="file"
          accept="audio/*"
          onChange={handleAudioUpload}
          className="p-3 border-gray-300"
        />
        {audioFile && (
          <span className="text-sm text-gray-600">{audioFile.name}</span>
        )}
      </div>

      {/* Static Waveform Mock */}
      {audioFile && (
        <div className="mt-4">
          <div className="h-16 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 rounded-md animate-pulse" />
          <p className="text-xs text-gray-500 mt-2 text-center">
            Mock waveform of uploaded audio
          </p>
        </div>
      )}

      {/* Controls */}
      {audioFile && (
        <div className="flex items-center gap-4 mt-6">
          <Button
            variant={isMuted ? "default" : "destructive"}
            onClick={() => setIsMuted(!isMuted)}
            className={`transition-all ${
              isMuted ? "bg-gray-500" : "bg-red-500 cursor-pointer"
            }`}
          >
            {isMuted ? "🔊 Unmute" : "🔇 Mute"}
          </Button>

          {/* Simple Audio Player */}
          {audioURL && !isMuted && (
            <audio
              controls
              src={audioURL}
              className="w-full rounded-md border-gray-300"
            />
          )}
        </div>
      )}
    </div>
  );
}
