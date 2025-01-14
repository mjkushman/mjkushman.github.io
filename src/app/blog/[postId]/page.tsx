import BlogPost from "@/components/BlogPost";
import { autoBloggerFetch } from "@/utils/api";


export async function generateStaticParams() {
  try {
    const { data } = await autoBloggerFetch(`posts`, {
      next: { revalidate: 600 },
    });
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
  return <BlogPost post={post} />;
}
// pst_VO8qJ_104N
