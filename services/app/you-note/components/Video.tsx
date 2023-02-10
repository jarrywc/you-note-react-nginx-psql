import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type VideoProps = {
  id: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;

};

export const Video: React.FC<{ video: VideoProps }> = ({ video }) => {
  const authorName = video.author ? video.author.name : "Unknown author";
  return (
    <div onClick={() => Router.push("/video/[id]", `/p/${video.id}`)}>
      <h2>{video.title}</h2>
      <small>By {authorName}</small>
      <ReactMarkdown children={video.content} />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

