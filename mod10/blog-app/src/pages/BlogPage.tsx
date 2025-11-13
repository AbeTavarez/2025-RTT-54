import { Link } from "react-router-dom";
interface BlogPageProps {
    blogs: []
}

function BlogPage({blogs}: BlogPageProps) {
    console.log(blogs);
    
  return (
    <main>
      <h2>Blog Page</h2>
      <ul>
        {blogs && blogs.map(blog => (
            <li key={blog.id}>
                <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                {/* <p>{blog.content.substring(0, 100)}...</p> */}
            </li>
        ))}
      </ul>
    </main>
  );
}

export default BlogPage;
