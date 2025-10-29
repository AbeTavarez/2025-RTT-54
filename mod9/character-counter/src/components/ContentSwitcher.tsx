import { useState } from "react";

// Union type
type ContentType = "text" | "image" | "video";

const imageUrl = 'https://images.unsplash.com/photo-1761405378558-3688471ba000?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364';

const videoUrl = 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

function ContentSwitcher() {
  const [contentType, setContentType] = useState<ContentType>("text");

  let contentElement: React.ReactNode;

  if (contentType === 'text') {
    contentElement = <p>This is some text content.</p>
  } else if (contentType === 'image') {
    contentElement = <img src={imageUrl} alt="Placeholder" height={500}/>
  } else if (contentType === 'video') {
    contentElement = <video src={videoUrl} width={500} autoPlay loop controls></video>
  }

  return (
    <div>
      <h2>ContentSwitcher</h2>

      <div>
        <button onClick={() => setContentType("text")}>Text</button>
        <button onClick={() => setContentType("image")}>Image</button>
        <button onClick={() => setContentType("video")}>Video</button>
      </div>

      <div>{contentElement}</div>
    </div>
  );
}

export default ContentSwitcher;
