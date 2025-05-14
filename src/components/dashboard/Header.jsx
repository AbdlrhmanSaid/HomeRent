import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">مرحبا بك في لوحة التحكم</h2>
      <Button variant="outline">
        <Link to="/">تسجيل الخروج</Link>
      </Button>
    </header>
  );
};

export default Header;
