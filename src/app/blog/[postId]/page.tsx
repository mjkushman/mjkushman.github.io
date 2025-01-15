import BlogPost from "@/components/BlogPost";
import { BlogPostType } from "@/types";
import { autoBloggerFetch } from "@/utils/api";
import Loading from "../loading";

export async function generateStaticParams() {
  try {
    const response = await autoBloggerFetch(`posts`, {
      next: { revalidate: 600 },
    });
    const { data } = await response.json();
    const posts: BlogPostType[] = data;

    return posts
    // return posts.map((post) => ({
    //   postId: post.postId,
    //   content: post.content,
    //   title: post.title,
    //   date: post.createdAt,
    // }));
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
    return <Loading/>;
  }

  return <BlogPost post={post} />;
};

export default Post;
