import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, FileText } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r min-h-screen p-4">
      <div className="text-2xl font-bold mb-6">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          <span className="text-teal-600">H</span>ome
          <span className="text-teal-600">R</span>ent
        </Link>
      </div>
      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 text-gray-700 hover:text-black"
        >
          <LayoutDashboard size={18} />
          لوحة التحكم
        </Link>
        <Link
          to="/dashboard/report"
          className="flex items-center gap-2 text-gray-700 hover:text-black"
        >
          <FileText size={18} />
          تقرير PDF
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
