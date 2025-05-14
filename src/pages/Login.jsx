import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-xl border border-gray-100">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center">تسجيل الدخول</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input
                type="email"
                id="email"
                required
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">كلمة المرور</Label>
              <Input
                type="password"
                id="password"
                required
                placeholder="********"
              />
            </div>

            <Button type="submit" className="w-full mt-4">
              تسجيل الدخول
            </Button>
          </form>

          <p className="text-sm text-center text-gray-500">
            ليس لديك حساب؟{" "}
            <span className="text-blue-500 cursor-pointer">سجّل الآن</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
