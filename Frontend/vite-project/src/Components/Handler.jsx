import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import LoadingPage from "./LoadingPage"; // Import the new loading page

const BlogList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blog/all", { withCredentials: true })
      .then((response) => {
        setBlogs(response.data.posts);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch blog posts.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoadingPage />; // Show the loading page
  }

  if (error) {
    return <LoadingPage />; // Show the loading page

  }

  return (
    <div className="grid h-screen grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-9">
      {blogs.map((blog, index) => (
        <BlogCard
          key={index}
          id={blog._id} // Pass the blog ID to the BlogCard
          title={blog.title}
          description={blog.content.slice(0, 200)} // Display the first 200 characters
        />
      ))}
    </div>
  );
};

export default BlogList;
