import { useEffect, useState } from "react";

function PostFetcher() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [postId, setPostId] = useState(1)

  // fetch a post from API
  useEffect(() => {
    
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError("");
        // fetch data
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        
        if (!response.ok) {
          throw new Error("Sorry try again! Error fetching data");
        }
        
        const data = await response.json();
        setPost(data);
      } catch (error) {
        // catch error
        console.error(error)
        setError(error.message);
      } finally {
        setLoading(false)
      }
    }

    // TODO: call the function
    fetchPost()

  }, [postId]);

  return (
    <div>
      <h2>Post Fetcher</h2>
      {loading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      <h3>{post && post.title}</h3>
      <p>{post && post.body}</p>

      <div>
        <button onClick={()=> setPostId(postId - 1)} disabled={postId === 1}>Previous</button>
        <button onClick={()=> setPostId(postId + 1)}>Next</button>
      </div>
    </div>
  );
}

export default PostFetcher;


// useEffect(() => {
//     console.log(`Fetching data...`);
//     setLoading(true);

//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Error fetching post");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setPost(data);
//       })
//       .catch((e) => setError(e.message))
//       .finally(() => setLoading(false));

//   }, [postId]);
