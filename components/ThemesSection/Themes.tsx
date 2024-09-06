"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../../styles/themes/background.css";

const data = [
  {
    serialNo: 1,
    heading: "Genie 🪄: Personalized Assistant",
    description:
      "Imagine an AI that provides personalized advice tailored to your day-to-day life patterns, financial goals, and the latest trends. This AI, potentially enhanced by large language models (LLMs), could generate custom strategies, plans, and tips that are unique to each user's situation. By analyzing real-time data and adapting to your changing circumstances, Genie 🪄 ensures your daily advice is always relevant and actionable. How can we develop a system that not only understands the recent landscape but also creates highly individualized guidance, helping you make smart decisions and achieve your best output?",
  },
  {
    serialNo: 2,
    heading: "🙂‍↔️Customer Support Innovation",
    description:
      "Yes, the boring old customer support. But imagine if there was a way to automate these conversations 🤤. With the advancement of Generative AI, an AI system could revolutionize customer support, improving response times, accuracy, and customer satisfaction through advanced natural language processing. How can we leverage GenAI to create customer support solutions that are more efficient, responsive, and human-like?",
  },
  {
    serialNo: 3,
    heading: "🔒 Secure the Future: Financial Safety Challenge",
    description:
      "In today's digital world, keeping our financial lives secure is more important than ever. How can technology help us protect what matters most? This challenge is all about finding innovative ways to enhance financial safety—whether through new ideas in security, creative tools for users, or something completely unexpected. Consider this new hype of AI might be used to assist in analyzing patterns, providing alerts, or enhancing user communication to make the digital world safer for everyone.",
  },
  {
    serialNo: 4,
    heading: "😍Empowering Gender Equality Through Tech-Driven Ecosystems",
    description:
      "In a world striving for balance, how can we harness technology to build ecosystems that proactively support gender equality across every sphere of life? Think beyond the traditional approaches—consider platforms that use AI to identify and combat gender bias in real time, or even blockchain-based systems that ensure equal access to resources. Your challenge is to create a solution that not only addresses the symptoms of gender inequality but tackles its root causes in innovative and measurable ways.",
  },
  {
    serialNo: 5,
    heading: "Citizen-Centric Governance: Redefining Public Service in the Digital Age 📢",
    description:
      "Imagine a world where government services are not just efficient but anticipatory, responding to citizen needs before they even arise. How can we use technology to create a government that feels more like a trusted partner than a distant authority? Think of GenAI-driven solutions that predict public service demands, or decentralized systems that allow citizens to co-create policies in real-time. Wouldn't it be soooo… cool useful?",
  },
  {
    serialNo: 6,
    heading: "Nature’s AI Guide 🌍: Predicting and Adapting to Climate Change",
    description:
      "As climate change reshapes our world, we need smart tools to help us understand and prepare for the future. Imagine an AI that can predict how our environment, animal habitats, and weather, sustainable development patterns will change in the coming years. This AI could help planners, governments, and conservationists make smarter decisions to protect wildlife, build climate-friendly cities, and create resilient communities. How can we use GenAI to not only predict nature’s changes but also help us build a future where both people and the planet thrive?",
  },
  {
    serialNo: 7,
    heading: "Smart Query AI 🧠: Unlocking Insights from Structured Data with GenAI",
    description:
      "In a world overflowing with data, the ability to extract valuable insights from structured datasets is critical. The challenge involves developing a GenAI system that can interpret and provide meaningful information from structured data sources, such as databases, spreadsheets, or APIs. This AI should be capable of understanding complex queries in natural language, generating insightful summaries, identifying patterns, and offering predictive analytics. The goal is to create a versatile tool that can serve various industries, from finance and healthcare to education and logistics, making data-driven decisions accessible to everyone.",
  },
  {
    serialNo: 8,
    heading: "Image Manipulator AI: Making Professional Photography",
    description:
      "Create an innovative solution using Stable Diffusion and Flux that enhances or streamlines image editing for professional photography. Address one or more challenges faced by these users who need it, such as automated retouching, intelligent composition assistance, or advanced style transfer. Your project should significantly improve workflow efficiency or image quality in professional photography contexts.",
  },

  // {
  //   serialNo: 7,
  //   heading: "🌍 Shape the Future: Societal Impact Challenge",
  //   description:
  //     "What will the future look like? That’s up to you! This challenge invites you to imagine and create tools or technologies that can help us understand and shape the world around us. Whether it's about improving lives, solving big problems, or just making the world a better place, consider how large language models (LLMs) might assist in processing complex data, enhancing communication, or offering new perspectives. How will your idea, possibly with the help of LLMs, change the way we think about and interact with our society?",
  // },
  // {
  //   serialNo: 8,
  //   heading: "🎉 Experience Revolution: Rethinking Large Events",
  //   description:
  //     "Large events are a staple of entertainment and culture, but what could make them even better? Here’s your chance to reimagine the experience of attending or participating in large-scale events. Whether it’s through new technologies, creative interactions, or something completely out-of-the-box, think about how large language models (LLMs) could help enhance personalization, interactivity, or communication to transform the way people enjoy big events. Dream big and think about how you can make the next concert, game, or festival an unforgettable experience for everyone involved. 🎉",
  // },
];

export default function Themes() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const handleToggle = (serialNo: number) => {
    setExpandedItem(expandedItem === serialNo ? null : serialNo);
  };

  return (
    <>
      <h1 className="mt-36 sm:mt-56 text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo">
        Problem Statements
      </h1>
      <div className="flex flex-col gap-6 mt-20 mx-4 sm:mx-24 bg-transparent border border-gray-300 rounded-lg shadow-md p-4">
        {data.map((item) => (
          <div
            key={item.serialNo}
            className="border-2 shadow-2xl border-gray-300 rounded-lg sponsor_css text-white"
            style={{ backgroundColor: "rgba(39, 39, 42, 0.43)" }}
          >
            <button
              onClick={() => handleToggle(item.serialNo)}
              className="w-full text-left p-4 font-bold rounded-lg focus:outline-none bg-transparent flex items-center justify-between"
            >
              <span>{item.heading}</span>
              {expandedItem === item.serialNo ? (
                <FaChevronUp className="text-white" />
              ) : (
                <FaChevronDown className="text-white" />
              )}
            </button>
            {expandedItem === item.serialNo && (
              <div
                className="p-4 rounded-lg sponsor_css"
                // style={{ backgroundColor: "rgba(39, 39, 42, 0.43)" }}
              >
                <p className="text-base">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
// export default function Themes() {
//   return (
//     <>
//       <h1 className="mt-36 sm:mt-56 text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-logo">
//         Problem Statements
//       </h1>
//       <div className="flex flex-col gap-6 mt-20 mx-4 sm:mx-24 bg-transparent border border-gray-300 rounded-lg shadow-md p-4">
//         {data.map((item) => (
//           <div
//             key={item.serialNo}
//             className="p-4 border border-gray-300 rounded-lg bg-gray-800 text-white"
//           >
//             <div className="text-lg font-semibold mb-2">
//               Serial No: {item.serialNo}
//             </div>
//             <div className="text-xl font-bold mb-2">{item.heading}</div>
//             <p className="text-base">{item.description}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }
