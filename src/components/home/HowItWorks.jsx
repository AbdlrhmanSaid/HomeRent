import { LogIn, ClipboardList, Home } from "lucide-react";
import Title from "../ui/Title";

const HowItWorks = () => {
  return (
    <section id="work" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Title title="كيف يعمل؟ HomeRent" center />

        <div className="mt-12 grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
            <div className="text-teal-600 mb-4 mx-auto flex justify-center">
              <LogIn size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. سجل الدخول</h3>
            <p className="text-gray-600">
              قم بإنشاء حساب جديد أو تسجيل الدخول للبدء في إدارة عقاراتك.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
            <div className="text-teal-600 mb-4 mx-auto flex justify-center">
              <ClipboardList size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              2. أضف بيانات المستأجرين
            </h3>
            <p className="text-gray-600">
              أدخل تفاصيل المستأجرين في لوحة التحكم لمتابعة الإيجارات بسهولة.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-md hover:shadow-lg transition">
            <div className="text-teal-600 mb-4 mx-auto flex justify-center">
              <Home size={48} />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. تابع الإيجارات</h3>
            <p className="text-gray-600">
              اعرض البيانات بسهولة، واطبع التقارير بصيغة PDF عند الحاجة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
