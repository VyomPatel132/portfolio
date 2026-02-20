import React from "react";
import { IoInformationCircle } from "react-icons/io5";

export const ProjectInfo = ({ info }: { info: any }) => {
  return (
    <div className="rounded-xl border border-white/8 bg-white/2 backdrop-blur-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <IoInformationCircle className="text-purple-400 text-lg" />
        <h3 className="text-base font-semibold text-white">Project Info</h3>
      </div>
      <div className="space-y-4 text-sm">
        <div>
          <span className="text-gray-500 text-xs uppercase tracking-wider">
            Category
          </span>
          <p className="text-white font-medium mt-0.5">{info.category}</p>
        </div>
        <div>
          <span className="text-gray-500 text-xs uppercase tracking-wider">
            Status
          </span>
          <p className="flex items-center gap-1.5 text-white font-medium mt-0.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {info.status}
          </p>
        </div>
        <div>
          <span className="text-gray-500 text-xs uppercase tracking-wider">
            Year
          </span>
          <p className="text-white font-medium mt-0.5">{info.year}</p>
        </div>
        <div>
          <span className="text-gray-500 text-xs uppercase tracking-wider">
            Role
          </span>
          <p className="text-white font-medium mt-0.5">{info.role}</p>
        </div>
      </div>
    </div>
  );
};
