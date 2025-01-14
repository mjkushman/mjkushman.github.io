import React from "react";
import Link from "next/link";
import { BlogPost } from "@/types";

const BlogList = async ({ posts }: { posts: BlogPost[] }) => {
  if (!posts || posts.length == 0) {
    return <div>No posts found.</div>;
  }

  return (
    <div className="my-10">
      {posts.map((p) => (
        <div key={p.postId}>
          <div className="my-2">
            <Link
              href={`blog/${p.postId}`}
              className="hover:underline decoration-[--primary] underline-offset-2"
            >
              {p.title}
            </Link>
            <div className="mb-4">
              <small className="align-bottom">
                {new Date(p.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
