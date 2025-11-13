import { Link, useParams } from "react-router-dom";

interface BlogDetailsPageProps {
  blogs: [];
}

function BlogDetailsPage({ blogs }: BlogDetailsPageProps) {
  // Read the slug value from the URL param
  const { slug } = useParams();

  // Find the matching blog using the slug
  const blog = blogs.find((blog) => blog.slug === slug);
  console.log(blog);

  // if the blog is not found return a message
  if (!blog) return <h1>Blog not Found: {slug}</h1>

  return (
    <main>
      <Link to="/blog">Back</Link>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </main>
  );
}

export default BlogDetailsPage;
