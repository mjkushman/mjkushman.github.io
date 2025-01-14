import { BlogPost } from "@/types";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";


const Post = ({ post }: { post: BlogPost }): React.ReactNode => {
  return (
    <div>
      <div className="w-full relative h-56 mb-8">
        <Image
          alt={post.title}
          fill={true}
          src={post.imageUrl ?? ""}
          loading="lazy"
          objectFit="cover"
        ></Image>
      </div>
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default Post;
