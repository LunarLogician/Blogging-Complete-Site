import React from "react";

const DetailCard = ({ title, content, author, date }) => {
  return (
    <div className="max-w-4xl w-full mx-auto mt-12 p-6 bg-[#F5EFE7] text-[#333333] rounded-lg shadow-lg">
      <h2 className="text-4xl md:text-4xl lg:text-5xl font-serif font-semibold mb-4 text-center text-[#213555]">{title}</h2>
      <p className="text-base md:text-lg text-[#D8C4B6] mb-4 text-center">By {author} | {date}</p>
      <div className="text-lg md:text-xl leading-relaxed text-[#333333]">
        {/* Render HTML content as raw HTML */}
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: content,  // Insert the raw HTML content here
          }}
        />
      </div>
    </div>
  );
};

export default DetailCard;
