"use client";

import { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button } from "@/components/ui/button";

type Scene = {
  id: number;
  name: string;
};

const ItemType = {
  SCENE: "scene",
};

function DraggableScene({
  scene,
  index,
  moveScene,
}: {
  scene: Scene;
  index: number;
  moveScene: (dragIndex: number, hoverIndex: number) => void;
}) {
  const [, ref] = useDrag({
    type: ItemType.SCENE,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.SCENE,
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveScene(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => ref(drop(node))}
      className="w-36 h-24 bg-blue-100 hover:bg-blue-200 flex items-center justify-center rounded-md cursor-move transition-all transform hover:scale-105"
    >
      <p className="text-gray-800 font-medium">{scene.name}</p>
    </div>
  );
}

export default function TimelineEditor() {
  const [scenes, setScenes] = useState<Scene[]>([
    { id: 1, name: "Scene 1" },
    { id: 2, name: "Scene 2" },
    { id: 3, name: "Scene 3" },
  ]);

  const moveScene = (from: number, to: number) => {
    const updatedScenes = [...scenes];
    const [moved] = updatedScenes.splice(from, 1);
    updatedScenes.splice(to, 0, moved);
    setScenes(updatedScenes);
  };

  const addScene = () => {
    const newScene: Scene = {
      id: Date.now(),
      name: `Scene ${scenes.length + 1}`,
    };
    setScenes([...scenes, newScene]);
  };

  const removeScene = (id: number) => {
    setScenes(scenes.filter((scene) => scene.id !== id));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Video Timeline Editor
        </h2>

        <div className="flex space-x-6 overflow-x-auto p-6">
          {scenes.map((scene, index) => (
            <div key={scene.id} className="relative">
              <DraggableScene
                scene={scene}
                index={index}
                moveScene={moveScene}
              />
              <Button
                size="sm"
                variant="destructive"
                className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 cursor-pointer"
                onClick={() => removeScene(scene.id)}
              >
                ✖
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <Button
            onClick={addScene}
            className="py-3 px-6 text-lg text-white bg-black hover:bg-gray-700 rounded-md transition-all cursor-pointer"
          >
            ➕ Add Scene
          </Button>
        </div>
      </div>
    </DndProvider>
  );
}
