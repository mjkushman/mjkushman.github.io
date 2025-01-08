import { autoBloggerFetch } from "@/utils/api";
import Image from "next/image";
import Markdown from "react-markdown";

export async function generateStaticParams() {


  try {
    const { data } = await autoBloggerFetch(`posts`);
    const posts = data;

    return posts.map((post) => ({
      postId: post.postId,
      content: post.content,
      title: post.title,
      date: post.createdAt,
    }));
  } catch (error) {
    console.log("api request failed:", error);
  }
}

export default async function Post({
  params,
}: {
  params: Promise<{
    postId: string;
  }>;
}) {
  const { postId } = await params;
  const { data } = await autoBloggerFetch(`posts/${postId}`);
  const post = data;
  return (
    <div>
      <div className="w-full relative h-56 mb-8">
        <Image
          alt={post.title}
          fill={true}
          src={post.imageUrl}
          loading="lazy"
          objectFit="cover"
        ></Image>
      </div>
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
// pst_VO8qJ_104N
