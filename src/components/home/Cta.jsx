import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Title from "../ui/Title";

const Cta = () => {
  return (
    <section className="bg-teal-600 py-16 text-white text-center rounded-2xl mx-4 md:mx-16 my-12">
      <div className="container mx-auto px-4">
        <Title
          title="ابدأ في تنظيم إيجاراتك الآن"
          className="text-white mb-4"
          center
        />

        <p className="text-lg mb-8 max-w-xl mx-auto">
          مع HomeRent، يمكنك تتبع المستأجرين وتنظيم الإيجارات بسهولة تامة. جربه
          الآن وشاهد الفرق!
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/login">
            <Button
              variant="secondary"
              className="text-teal-600 bg-white hover:bg-gray-100"
            >
              تسجيل الدخول
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
