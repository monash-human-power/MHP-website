import React from "react";

/**
 * Component for embedding videos.
 * @param videoSrcURL embed link (e.g. https://youtube.com/embed/someVideoId)
 * @param videoTitle video title
 * @returns
 */
// Taken from gatsby docs: https://www.gatsbyjs.com/docs/how-to/images-and-media/working-with-video/
const Video = ({ videoSrcURL, videoTitle }) => (
  <div className="ratio ratio-16x9">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);
export default Video;
