import React from "react";
import { autoBloggerFetch } from "@/utils/api";
import Link from "next/link";
type Props = {};

const BlogList = async (props: Props) => {
  let posts;
  try {
    const { data, status } = await autoBloggerFetch(`posts`);
    posts = data;
  } catch (error) {
    console.log("api request failed:", error);
  }

  return (
    <div className="my-10">
      {posts.map((p) => (
        <div key={p.postId}>
          <div className="my-2">
            <div>
            <small className="align-bottom">
            {new Date(p.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}</small>
            </div>
            <Link href={`blog/${p.postId}`} className="prose hover:underline decoration-[--primary] underline-offset-2">
              {p.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
