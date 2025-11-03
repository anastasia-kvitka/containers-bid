import { Brain, DollarSign, Link } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      icon: <Link className="w-10 h-10 text-brand" />,
      step: "STEP 1",
      title: "Paste a Link",
      description: "Enter your email and paste a link to your auction",
    },
    {
      id: 2,
      icon: <Brain className="w-10 h-10 text-brand" />,
      step: "STEP 2",
      title: "AI Analyzes",
      description: "Our AI identifies items and finds similar products",
    },
    {
      id: 3,
      icon: <DollarSign className="w-10 h-10 text-brand" />,
      step: "STEP 3",
      title: "Get Prices",
      description: "Receive instant price estimates and recommendations",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-gray-600 mb-12">
          Three simple steps to discover the value of your items
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm p-10 flex flex-col items-center text-center hover:shadow-lg hover:border-brand transition-all"
            >
              {step.icon}
              <p className="text-brand font-semibold uppercase text-sm mt-4">
                {step.step}
              </p>
              <h3 className="text-lg font-bold text-gray-900 mt-2">
                {step.title}
              </h3>
              <p className="text-gray-600 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
