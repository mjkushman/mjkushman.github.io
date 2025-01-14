import React from "react";
import { autoBloggerFetch } from "@/utils/api";
import Link from "next/link";
type Props = {};

const BlogList = async (props: Props) => {
  let posts = [];
  try {
    const { data, status } = await autoBloggerFetch(`posts`);
    // console.log(data[0])
    posts = data;
  } catch (error) {
    console.log("api request failed:", error);
  }

  if(posts.length == 0) return "No posts" 
  return (
    <div className="my-10">
      {posts.length === 0 ? (
        <div>No posts found.</div>
      ) : (
        posts.map((p) => (
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
        ))
      )}
    </div>
  );
};

export default BlogList;
