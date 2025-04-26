import VideoUploader from "@/components/VideoUploader";
import TimelineEditor from "@/components/TimelineEditor";
import AudioManager from "@/components/AudioManager";
import SubtitleEditor from "@/components/SubtitleEditor";
import ImageOverlayEditor from "@/components/ImageOverlayEditor";
import RenderControls from "@/components/RenderControls";

export default function HomePage() {
  return (
    <main className="p-6 max-w-6xl mx-auto space-y-16 ">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700">🎬 Video Editor</h1>
        <p className="text-lg text-gray-600 mt-4">
          Edit your videos easily with our all-in-one web editor.
        </p>
      </div>

      {/* Video Uploader */}
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
            📹 Upload Your Video
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
            Start by uploading the video you want to edit. Drag and drop or
            browse your files.
          </p>
        </div>
        <VideoUploader />
      </section>

      {/* Timeline Editor */}
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
            🕒 Edit Your Video Timeline
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
            Organize clips, add transitions, and fine-tune your video with an
            easy-to-use timeline.
          </p>
        </div>
        <TimelineEditor />
      </section>

      {/* Audio Manager */}
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
            🎧 Manage Audio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
            Adjust audio levels or add background music to make your video sound
            perfect.
          </p>
        </div>
        <AudioManager />
      </section>

      {/* Subtitle Editor */}
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
            💬 Add Subtitles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
            Easily add subtitles for better accessibility and reach a wider
            audience.
          </p>
        </div>
        <SubtitleEditor />
      </section>

      {/* Image Overlay Editor */}
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
            🖼️ Add Image Overlays
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
            Overlay logos or images anywhere on your video to customize
            branding.
          </p>
        </div>
        <ImageOverlayEditor />
      </section>

      {/* Render Controls */}
      <section className="space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 flex items-center justify-center gap-2">
            🎬 Render & Download
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-2">
            Preview your edits, render the final version, and download it
            instantly.
          </p>
        </div>
        <RenderControls />
      </section>
    </main>
  );
}
