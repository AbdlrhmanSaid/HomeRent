import React from "react";
import Title from "@/components/ui/Title";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "أحمد محمد",
      role: "مؤسس",
      description:
        "خبير في إدارة الأعمال ولديه شغف بتحسين طريقة إدارة العقارات والمستأجرين.",
      imageUrl:
        "https://media.istockphoto.com/id/2166253481/photo/3d-rendering-of-user-profile-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=EWDaI-OFertU9FWVokWlOorkJBC7JWcToSBgDaLbJeo=",
    },
    {
      name: "سارة علي",
      role: "مدير تقني",
      description:
        "تتمتع بخبرة في البرمجيات وتحليل البيانات. تعمل على تطوير منصتنا بشكل مستمر.",
      imageUrl:
        "https://media.istockphoto.com/id/2166253481/photo/3d-rendering-of-user-profile-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=EWDaI-OFertU9FWVokWlOorkJBC7JWcToSBgDaLbJeo=",
    },
    {
      name: "محمود يوسف",
      role: "مصمم واجهات",
      description:
        "مصمم ذو رؤية فنية عالية يعمل على خلق تجارب مستخدم مبتكرة وسهلة.",
      imageUrl:
        "https://media.istockphoto.com/id/2166253481/photo/3d-rendering-of-user-profile-icon.webp?a=1&b=1&s=612x612&w=0&k=20&c=EWDaI-OFertU9FWVokWlOorkJBC7JWcToSBgDaLbJeo=",
    },
  ];
  return (
    <section id="AboutUs" className="py-16 bg-white">
      <div className="conta iner mx-auto px-4 text-center">
        <Title title="من نحن؟" className="text-gray-900 mb-4" center />

        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          في HomeRent، نسعى لجعل عملية إدارة إيجارات الشقق أبسط وأسهل. نحن فريق
          مكون من مجموعة من المحترفين الذين يعملون على توفير حلول مبتكرة
          لعملائنا. هدفنا هو توفير أدوات تنظيمية تساعد في تسريع الأعمال وتحسين
          تجربة المستأجرين.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-teal-50 rounded-lg shadow-md mb-8"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-gray-600 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
