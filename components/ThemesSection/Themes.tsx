"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../../styles/themes/background.css";

const data = [
  {
    serialNo: 1,
    heading: "Money Genie 🪄: Personalized Financial Advice",
    description:
      "Imagine an AI that provides personalized financial advice tailored to your spending patterns, financial goals, and the latest market trends. This AI, potentially enhanced by large language models (LLMs), could generate custom investment strategies, budgeting plans, and financial tips that are unique to each user's situation. By analyzing real-time financial data and adapting to your changing circumstances, Money Genie 🪄 ensures your financial advice is always relevant and actionable. How can we develop a system that not only understands the financial landscape but also creates highly individualized financial guidance, helping you make smart decisions and achieve your financial dreams?",
  },
  {
    serialNo: 2,
    heading: "Customer Support Innovation",
    description:
      "Yes, the boring old customer support. But imagine if there was a way to automate these conversations 🤤. With the help of large language models (LLMs), an AI system could revolutionize customer support, improving response times, accuracy, and customer satisfaction through advanced natural language processing. How can we leverage LLMs to create customer support solutions that are more efficient, responsive, and human-like?",
  },
  {
    serialNo: 3,
    heading: "🔒 Secure the Future: Financial Safety Challenge",
    description:
      "In today's digital world, keeping our financial lives secure is more important than ever. How can technology help us protect what matters most? This challenge is all about finding innovative ways to enhance financial safety—whether through new ideas in security, creative tools for users, or something completely unexpected. Consider how large language models (LLMs) might be used to assist in analyzing patterns, providing alerts, or enhancing user communication to make the digital world safer for everyone.",
  },

  {
    serialNo: 4,
    heading: "🌍 Shape the Future: Societal Impact Challenge",
    description:
      "What will the future look like? That’s up to you! This challenge invites you to imagine and create tools or technologies that can help us understand and shape the world around us. Whether it's about improving lives, solving big problems, or just making the world a better place, consider how large language models (LLMs) might assist in processing complex data, enhancing communication, or offering new perspectives. How will your idea, possibly with the help of LLMs, change the way we think about and interact with our society?",
  },
  {
    serialNo: 5,
    heading: "🎉 Experience Revolution: Rethinking Large Events",
    description:
      "Large events are a staple of entertainment and culture, but what could make them even better? Here’s your chance to reimagine the experience of attending or participating in large-scale events. Whether it’s through new technologies, creative interactions, or something completely out-of-the-box, think about how large language models (LLMs) could help enhance personalization, interactivity, or communication to transform the way people enjoy big events. Dream big and think about how you can make the next concert, game, or festival an unforgettable experience for everyone involved. 🎉",
  },
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
