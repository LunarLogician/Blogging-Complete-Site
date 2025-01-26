import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // useNavigate instead of useHistory

const UpdateCard = () => {
  const { id } = useParams(); // Get the blog id from the URL
  const navigate = useNavigate(); // For redirecting after update
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the blog data by ID when the component mounts
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/blog/${id}`);
        if (res.ok) {
          const data = await res.json();
          setBlog({
            title: data.title,
            content: data.content,
          });
          setLoading(false);
        } else {
          throw new Error("Error fetching blog data");
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [id]);

  // Handle form submission (update blog)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch(`http://localhost:5000/api/blog/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      });
      
      if (res.ok) {
        alert("Blog updated successfully!");
        navigate(`/blogs/${id}`); // Redirect to the updated blog page
      } else {
        alert("Error updating the blog");
      }
    } catch (err) {
      alert("Error occurred while updating");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="update-card">
      <h1>Update Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={blog.content}
            onChange={(e) => setBlog({ ...blog, content: e.target.value })}
            required
          />
        </div>
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default UpdateCard;
