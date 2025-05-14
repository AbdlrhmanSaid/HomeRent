import React from "react";
import { Home, Users, FileText } from "lucide-react";
import Title from "../ui/Title";

const features = [
  {
    icon: <Home className="h-6 w-6 text-teal-600" />,
    title: "إدارة الشقق بسهولة",
    description:
      "نظّم بيانات الشقق المؤجرة بكل سهولة، واحتفظ بكل التفاصيل في مكان واحد.",
  },
  {
    icon: <Users className="h-6 w-6 text-teal-600" />,
    title: "متابعة المستأجرين",
    description: "سجّل بيانات المستأجرين وتابع حالة الإيجار والدفع بشكل منتظم.",
  },
  {
    icon: <FileText className="h-6 w-6 text-teal-600" />,
    title: "تصدير تقارير PDF",
    description:
      "أنشئ تقارير جاهزة للطباعة بنقرة واحدة لعرض كل التفاصيل المهمة.",
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          title="مميزات HomeRent"
          subtitle="منصة بسيطة لكنها قوية تساعدك على تنظيم عملية تأجير الشقق بكل سهولة."
          center
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
