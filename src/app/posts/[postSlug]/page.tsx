import BlogPost, { BlogPostParams } from "@/components/BlogPost";
import { getBlogPostList } from "@/helpers/file-helpers";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const blogPosts = await getBlogPostList();

  return blogPosts.map((post) => ({
    postSlug: post.slug,
  }));
}

function BlogPostPage({ params }: BlogPostParams) {
  return <BlogPost params={params} />;
}

export default BlogPostPage;
