"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type Subtitle = {
  id: number;
  text: string;
  startTime: string;
  endTime: string;
};

export default function SubtitleEditor() {
  const [subtitles, setSubtitles] = useState<Subtitle[]>([]);
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const addSubtitle = () => {
    if (text && startTime && endTime) {
      setSubtitles([
        ...subtitles,
        { id: Date.now(), text, startTime, endTime },
      ]);
      setText("");
      setStartTime("");
      setEndTime("");
    }
  };

  const removeSubtitle = (id: number) => {
    setSubtitles(subtitles.filter((s) => s.id !== id));
  };

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-semibold">💬 Subtitle Editor</h2>

      {/* Subtitle Input Form */}
      <div className="flex flex-col gap-4">
        <Textarea
          placeholder="Enter subtitle text..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex items-center gap-4">
          <Input
            type="text"
            placeholder="Start Time (e.g. 00:00:05)"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <Input
            type="text"
            placeholder="End Time (e.g. 00:00:10)"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <Button onClick={addSubtitle}>➕ Add Subtitle</Button>
      </div>

      {/* Simple List of Subtitles */}
      <div className="divide-y divide-gray-300">
        {subtitles.map((subtitle) => (
          <div
            key={subtitle.id}
            className="flex justify-between items-center py-2"
          >
            <div className="space-y-1">
              <p className="font-medium">{subtitle.text}</p>
              <p className="text-xs text-gray-500">
                {subtitle.startTime} - {subtitle.endTime}
              </p>
            </div>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => removeSubtitle(subtitle.id)}
            >
              ✖
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
