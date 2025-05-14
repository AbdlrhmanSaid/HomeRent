import React from "react";
import Title from "../ui/Title";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="bg-gray-50 py-16" id="contact">
      <div className="container max-w-3xl mx-auto px-4">
        <Title title="تواصل معنا" center />

        <p className="text-center text-gray-600 mb-10">
          هل لديك سؤال أو استفسار؟ لا تتردد في التواصل معنا وسنقوم بالرد عليك في
          أقرب وقت.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-2xl shadow-md"
        >
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              الاسم الكامل
            </label>
            <Input type="text" placeholder="أدخل اسمك" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              البريد الإلكتروني
            </label>
            <Input type="email" placeholder="example@email.com" />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              الرسالة
            </label>
            <Textarea rows="4" placeholder="اكتب رسالتك هنا..." />
          </div>

          <Button className="w-full" type="submit">
            إرسال الرسالة
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
