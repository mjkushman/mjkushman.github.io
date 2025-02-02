import { BlogPostType } from "@/types";
import Image from "next/image";
import React from "react";
import Markdown from "react-markdown";

const Post = ({ post }: { post: BlogPostType }): React.ReactNode => {
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
        <Markdown
          className="text-[--foreground]"
          components={{
            h1: ({ ...props }) => (
              <h1 className="text-[--primary]" {...props} />
            ),
            h2: ({ ...props }) => (
              <h2 className="text-[--foreground]" {...props} />
            ),
            h3: ({ ...props }) => (
              <h3 className="text-[--foreground]" {...props} />
            ),
            h4: ({ ...props }) => (
              <h4 className="text-[--foreground]" {...props} />
            ),
            h5: ({ ...props }) => (
              <h5 className="text-[--foreground]" {...props} />
            ),
            h6: ({ ...props }) => (
              <h6 className="text-[--foreground]" {...props} />
            ),
            strong: ({ ...props }) => (
              <strong className="text-[--primary]" {...props} />
            ),
            p: ({ ...props }) => (
              <p className="text-[--foreground]" {...props} />
            ),
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </div>
  );
};

export default Post;
