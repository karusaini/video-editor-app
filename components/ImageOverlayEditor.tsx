"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Rnd } from "react-rnd";

export default function ImageOverlayEditor() {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [opacity, setOpacity] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({
    width: 180,
    height: 180,
    x: 60,
    y: 60,
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageURL(URL.createObjectURL(file));
      setPosition({ width: 180, height: 180, x: 60, y: 60 }); // Reset position
      setRotation(0);
      setOpacity(100);
    }
  };

  const resetOverlay = () => {
    setPosition({ width: 180, height: 180, x: 60, y: 60 });
    setRotation(0);
    setOpacity(100);
  };

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">
        🖼️ Image Overlay Editor
      </h2>

      {/* Upload Image */}
      <div className="flex items-center gap-4 cursor-pointer">
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {/* Video Mock Area */}
      <div className="relative w-full h-[400px] bg-black rounded-xl overflow-hidden">
        <p className="text-white text-xs absolute top-2 left-2 opacity-70">
          [ Video Preview Area ]
        </p>

        {/* Image Overlay */}
        {imageURL && (
          <Rnd
            bounds="parent"
            size={{ width: position.width, height: position.height }}
            position={{ x: position.x, y: position.y }}
            onDragStop={(_, d) =>
              setPosition((pos) => ({ ...pos, x: d.x, y: d.y }))
            }
            onResizeStop={(_, __, ref, delta, position) =>
              setPosition({
                width: ref.offsetWidth,
                height: ref.offsetHeight,
                x: position.x,
                y: position.y,
              })
            }
            className="border-2 border-dashed border-white"
          >
            <img
              src={imageURL}
              alt="Overlay"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                opacity: opacity / 100,
                transform: `rotate(${rotation}deg)`,
                transition: "all 0.3s ease-in-out",
                borderRadius: "8px",
              }}
            />
          </Rnd>
        )}
      </div>

      {/* Settings Panel */}
      {imageURL && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Opacity Control */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700">Opacity</p>
              <Slider
                value={[opacity]}
                onValueChange={(value) => setOpacity(value[0])}
                max={100}
                step={1}
              />
            </div>

            {/* Rotation Control */}
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700">
                Rotation ({rotation}°)
              </p>
              <Slider
                value={[rotation]}
                onValueChange={(value) => setRotation(value[0])}
                max={360}
                step={1}
              />
            </div>
          </div>

          {/* Size Display */}
          <div className="text-sm text-gray-500">
            Size: <b>{position.width}px</b> x <b>{position.height}px</b>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button variant="secondary" onClick={resetOverlay}>
              🔄 Reset
            </Button>
            <Button variant="destructive" onClick={() => setImageURL(null)}>
              🗑️ Remove Image
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
