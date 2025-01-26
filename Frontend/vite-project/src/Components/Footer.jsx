import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#213555] text-[#F5EFE7]   py-10 ">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          &copy; 2025 BloggingSite. All rights reserved.
        </p>
        <div className="space-x-6 mt-4">
          <a href="/privacy" className="hover:text-[#D8C4B6]">Privacy Policy</a>
          <a href="/terms" className="hover:text-[#D8C4B6]">Terms of Service</a>
          <a href="/contact" className="hover:text-[#D8C4B6]">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
