import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/createblog", // API endpoint for blog creation
        { title, content },
        { withCredentials: true } // Include credentials for user authentication
      );
      setSuccessMessage("Blog post created successfully!");
      setTitle(""); // Clear form after submission
      setContent("");
    } catch (error) {
      setError("Failed to create blog post.");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#213555] flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-gradient-to-b from-[#1E2C44] to-[#3E5879] p-10 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        {/* Title Section */}
        <h1 className="text-5xl text-[#D8C4B6] font-bold text-center mb-8">
          Create a Beautiful Blog
        </h1>

        {/* Error or Success Messages */}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {successMessage && (
          <div className="text-green-500 text-center mb-4">{successMessage}</div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Blog Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-[#F5EFE7] text-lg font-medium mb-2"
            >
              Blog Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-4 bg-[#D8C4B6] border-2 border-[#213555] rounded-lg text-[#213555] focus:outline-none focus:ring-2 focus:ring-[#D8C4B6]"
              placeholder="Enter a captivating title..."
            />
          </div>

          {/* Blog Content */}
          <div>
            <label
              htmlFor="content"
              className="block text-[#F5EFE7] text-lg font-medium mb-2"
            >
              Blog Content
            </label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="Write your amazing blog content here..."
              className="bg-[#D8C4B6] text-[#213555] rounded-lg focus:outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-1/2 p-4 bg-[#D8C4B6] hover:bg-[#213555] hover:text-[#D8C4B6] text-[#213555] font-bold text-xl rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Publish Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
