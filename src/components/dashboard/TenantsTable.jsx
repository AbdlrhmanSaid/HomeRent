import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const tenants = [
  {
    name: "أحمد محمد",
    phone: "01012345678",
    apartment: "A1",
    rent: "3500 جنيه",
  },
  {
    name: "سارة علي",
    phone: "01012345678",
    apartment: "B2",
    rent: "4000 جنيه",
  },
  {
    name: "محمد عمرو",
    phone: "01012345678",
    apartment: "C3",
    rent: "3200 جنيه",
  },
];

const TenantsTable = () => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-bold mb-4">قائمة المستأجرين</h3>
        <table className="w-full text-right border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">الاسم</th>
              <th className="p-2 border">رقم الهاتف</th>
              <th className="p-2 border">رقم الشقة</th>
              <th className="p-2 border">الإيجار الشهري</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2 border">{tenant.name}</td>
                <td className="p-2 border">{tenant.phone}</td>
                <td className="p-2 border">{tenant.apartment}</td>
                <td className="p-2 border">{tenant.rent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default TenantsTable;
