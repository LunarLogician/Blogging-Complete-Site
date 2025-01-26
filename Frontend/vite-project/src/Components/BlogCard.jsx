import React from "react";

const BlogCard = ({ title, description, id }) => {
  const handler = () => {
    window.location.href = `/blog/${id}`;
  };

  // Function to strip inline styles, classes, and tags from HTML content
  const stripStyles = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const elements = doc.body.getElementsByTagName("*");

    // Remove all inline styles and classes
    for (let element of elements) {
      element.removeAttribute("style");
      element.removeAttribute("class");
    }

    // Strip out all HTML tags and leave only plain text
    return doc.body.textContent || doc.body.innerText;
  };

  return (
    <div
      className="w-full sm:w-80 h-full sm:h-96 bg-[#1E2C44] text-[#F5EFE7] rounded-lg shadow-xl transform transition-all hover:scale-105 duration-300"
    >
      <div className="p-6 flex flex-col h-full">
        {/* Title Section */}
        <h2 className="text-xl sm:text-xl font-semibold mb-4">{title}</h2>

        {/* Description Section with Scrollable Content */}
        <div className="flex-grow overflow-hidden mb-6">
          {/* Render stripped text content without any HTML tags or styles */}
          <div className="text-lg sm:text-xl text-[#D8C4B6] line-clamp-4">
            {stripStyles(description)} {/* Stripped plain text */}
          </div>
        </div>

        {/* Fixed Button */}
        <div className="mt-auto">
          <button
            onClick={handler}
            className="bg-[#D8C4B6] text-[#213555] py-2 px-6 rounded-lg text-lg sm:text-xl transition-all duration-300 hover:bg-[#213555] hover:text-[#D8C4B6] hover:scale-105"
          >
            Read Blog
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogList = ({ blogs }) => {
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-10 p-4 lg:p-8 max-w-screen-xl mx-auto">
      {blogs.map((blog) => (

        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default BlogCard;
