import React from "react";
import { PortableText } from "@portabletext/react";

export const AboutProject = ({ about }: { about: any }) => {
  if (!about) return null;

  return (
    <section>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        About This Project
      </h2>
      <div className="text-gray-400 text-base leading-relaxed">
        <PortableText 
          value={about} 
          components={{
            block: {
              // Customizes the standard paragraph style
              normal: ({ children }) => (
                <p className="mb-5 last:mb-0 text-gray-400">
                  {children}
                </p>
              ),
              // Allows for subheadings within your "About" section
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold text-white mt-8 mb-4">
                  {children}
                </h3>
              ),
            },
            list: {
              // Properly styles bullet points from the Sanity editor
              bullet: ({ children }) => (
                <ul className="list-disc ml-5 mb-5 space-y-2 text-gray-400">
                  {children}
                </ul>
              ),
            },
            marks: {
              // Ensures links within the text are styled correctly
              link: ({ children, value }) => (
                <a 
                  href={value.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-purple-400 hover:underline"
                >
                  {children}
                </a>
              ),
            },
          }}
        />
      </div>
    </section>
  );
};