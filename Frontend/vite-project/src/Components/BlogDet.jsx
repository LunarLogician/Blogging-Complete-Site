import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles for snow theme
import DetailCard from "./DetailCard";

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatedBlog, setUpdatedBlog] = useState({
    title: "",
    content: "",
    author: "",
  });

  const [loggedUserId, setLoggedUserId] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch the logged-in user ID from the "current user" API
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/currentUser", { withCredentials: true })
      .then((response) => {
        setLoggedUserId(response.data.user.userId);
      })
      .catch((err) => {
        console.error("Failed to fetch current user:", err);
        setError("Failed to fetch user details.");
      });
  }, []);

  // Fetch the blog details based on the blog ID from URL
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blog/${id}`, { withCredentials: true })
      .then((response) => {
        const blogData = response.data.post;
        setBlog(blogData);
        setUpdatedBlog({
          title: blogData.title,
          content: blogData.content,
          author: blogData.author,
        });
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch blog details.");
        setLoading(false);
        console.error(err);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBlog({ ...updatedBlog, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/blog/update/${id}`,
        updatedBlog,
        { withCredentials: true }
      );

      if (res.status === 200) {
        // After successfully updating, fetch the updated blog data again
        axios
          .get(`http://localhost:5000/api/blog/${id}`, { withCredentials: true })
          .then((response) => {
            const updatedBlogData = response.data.post;
            setBlog(updatedBlogData); // Update the state with new blog data
            setUpdatedBlog({
              title: updatedBlogData.title,
              content: updatedBlogData.content,
              author: updatedBlogData.author,
            });
            alert("Blog updated successfully!");
            navigate(`/blog/${id}`); // Redirect to the updated blog page
          })
          .catch((err) => {
            alert("Error occurred while fetching updated blog data.");
            console.error(err);
          });
      } else {
        alert("Error updating the blog");
      }
    } catch (err) {
      alert("Error occurred while updating");
      console.error(err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const isUserOwner = loggedUserId === blog.userId;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-[#2a4365] to-[#1e293b] flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg border border-[#e2e8f0]">
          <DetailCard
            title={blog.title}
            content={blog.content}
            author={blog.author}
            date={new Date(blog.date).toLocaleDateString()}
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        {isUserOwner && (
          <span className="w-full bg-[#4c7b98] text-white font-semibold py-3 rounded-lg shadow-lg text-center transition-all duration-300 mb-6">
            You Can Update Your Blog Directly
          </span>
        )}
      </div>

      {isUserOwner && (
        <div className="mt-8 space-y-6 px-4 max-w-3xl mx-auto">
          <div className="space-y-4">
            <input
              type="text"
              name="title"
              value={updatedBlog.title}
              onChange={handleInputChange}
              placeholder="Update Title"
              className="w-full p-4 border-2 border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-[#4c7b98] transition duration-300 bg-[#F5EFE7] text-[#333333]"
            />
          </div>

          <div className="space-y-4">
            <ReactQuill
              value={updatedBlog.content}
              onChange={(value) => setUpdatedBlog({ ...updatedBlog, content: value })}
              placeholder="Update Content"
              className="w-full p-4 border-2 border-gray-300 rounded-lg text-xl focus:outline-none focus:ring-2 focus:ring-[#4c7b98] transition duration-300 bg-[#F5EFE7] text-[#333333]"
              modules={{
                toolbar: [
                  [{ header: '1'}, { header: '2'}, { font: [] }],
                  [{ list: 'ordered'}, { list: 'bullet' }],
                  ['bold', 'italic', 'underline'],
                  [{ align: [] }],
                  ['link'],
                  ['blockquote'],
                  ['image'],
                  ['code-block'],
                ],
              }}
            />
          </div>

          <button
            className="w-full bg-[#4c7b98] hover:bg-[#365f73] text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300"
            onClick={handleUpdate}
          >
            Save Changes
          </button>

          {isUserOwner && (
            <button
              onClick={() => {
                const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
                if (confirmDelete) {
                  axios
                    .delete(`http://localhost:5000/api/blog/delete/${id}`, { withCredentials: true })
                    .then(() => {
                      alert("Blog deleted successfully!");
                      navigate("/blogs");
                    })
                    .catch((err) => alert("Failed to delete the blog."));
                }
              }}
              className="w-full bg-[#ff6e6e] hover:bg-[#ff6e6e] text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300"
            >
              Delete Blog
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default BlogDetail;
