import React from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="bg-white border-b px-4 py-3 flex justify-between items-center shadow-sm">
      <button className="md:hidden" onClick={onToggleSidebar}>
        <Menu className="text-gray-700" />
      </button>

      <h2 className="text-xl font-semibold">لوحة التحكم</h2>

      <Button variant="outline">
        <Link to="/" className="flex items-center gap-2">
          تسجيل الخروج
        </Link>
      </Button>
    </header>
  );
};

export default Header;
