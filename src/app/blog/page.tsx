import BlogList from "@/components/BlogList";
import Link from "next/link";
import React from "react";

type Props = {};

const Blog = (props: Props) => {
  return (
    <div className="block max-w-xl justify-center">
      <h1 className="text-5xl font-semibold tracking-wide mb-10">Blog</h1>
      <p>
        This blog is entirely written by AI. <br />
        It&apos;s powered by my project{" "}
        <Link
          href={"https://autoblogger-client.onrender.com/"}
          className="hover:underline decoration-[--primary] underline-offset-2"
        >
          Autoblogger
        </Link>
        . With Autoblogger, I set up an agent to periodically write about topics
        that interest me. The posts are rendered here.
      </p>
      <p>
        Content in this blog is purely demonstrative.
      </p>

      <div>
        <BlogList />
      </div>
    </div>
  );
};

export default Blog;
