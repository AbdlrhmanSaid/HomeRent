import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const AddTenant = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    apartment: "",
    rent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("تم إرسال بيانات المستأجر:", formData);
    setFormData({
      name: "",
      phone: "",
      apartment: "",
      rent: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card>
        <CardContent className="p-6 space-y-6">
          <h2 className="text-2xl font-bold text-center mb-2">
            إضافة مستأجر جديد
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="name">الاسم الكامل</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="أدخل اسم المستأجر"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="phone">رقم الهاتف</Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                placeholder="01012345678"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="apartment">رقم الشقة</Label>
              <Input
                type="text"
                id="apartment"
                name="apartment"
                placeholder="مثلاً A1 أو 101"
                value={formData.apartment}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="rent">الإيجار الشهري</Label>
              <Input
                type="number"
                id="rent"
                name="rent"
                placeholder="بالجنيه المصري"
                value={formData.rent}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              إضافة المستأجر
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddTenant;
