import React from "react";
import { FaFacebookF, FaLink, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";

export const ShareProject = () => {
  return (
    <div className="rounded-xl border border-white/8 bg-white/2 backdrop-blur-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <IoShareSocial className="text-purple-400 text-lg" />
        <h3 className="text-base font-semibold text-white">Share Project</h3>
      </div>
      <div className="flex gap-3">
        {[
          { icon: <FaXTwitter />, label: "X" },
          { icon: <FaLinkedinIn />, label: "LinkedIn" },
          { icon: <FaFacebookF />, label: "Facebook" },
          { icon: <FaLink />, label: "Copy link" },
        ].map((social) => (
          <button
            key={social.label}
            aria-label={`Share on ${social.label}`}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-colors hover:border-purple-500/40 hover:text-purple-400"
          >
            {social.icon}
          </button>
        ))}
      </div>
    </div>
  );
};
