import BlogPost from "@/components/BlogPost";
import { BlogPostType } from "@/types";
import { autoBloggerFetch } from "@/utils/api";
import LoadingCommon from "@/components/LoadingCommon";

export async function generateStaticParams() {
  try {
    const response = await autoBloggerFetch(`posts`, {
      next: { revalidate: 600 },
    });
    const { data } = await response.json();
    const posts: BlogPostType[] = data;

    return posts;
  } catch (error) {
    console.log("api request failed:", error);
  }
  return [];
}

const Post = async ({
  params,
}: {
  params: Promise<{
    postId: string;
    content: string;
    title: string;
    date: Date;
  }>;
}) => {
  const { postId } = await params;

  const fetchPost = async (): Promise<BlogPostType> => {
    const response = await autoBloggerFetch(`posts/${postId}`, {
      next: { revalidate: 600 },
    });
    const { data }: { data: BlogPostType } = await response.json();
    return data;
  };

  const post = await fetchPost();
  if (!post) {
    return <LoadingCommon />;
  }

  return <BlogPost post={post} />;
};

export default Post;
