"use client";
import { useState } from "react";
import { Container } from "./Container";
import "../../styles/faq/background.css";

const duHacksFaq = [
  {
    question: <>Who can participate? 🌐</>,
    answer: (
      <>
        Code Cubicle 3.0 welcomes participants from all backgrounds, whether
        you’re a student, professional, or have varying levels of experience. No
        matter if you’re just starting or already have advanced skills, and
        regardless of your academic field, you are invited to be part of the
        event! 🚀
      </>
    ),
  },
  {
    question: <>When and where is Code Cubicle 3.0 2024 taking place? </>,
    answer: (
      <>
        Code Cubicle 3.0 2024 is an offline event scheduled for 21st September.
        The venue is Mastercard Office, Gurugram. It's a hackathon that promises
        an immersive experience in tech innovation 🤖
      </>
    ),
  },
  {
    question: (
      <>Do I need to pay a registration fee to participate in the hackathon?</>
    ),
    answer: (
      <>
        No. There is no registration fee for participating in the hackathon.
        This approach ensures that creativity and innovation can flourish
        without restrictions, allowing participants to immerse themselves in a
        collaborative and dynamic environment.🌐✨
      </>
    ),
  },
  {
    question: (
      <>
        As the hackathon is in hybrid mode, who is allowed to participate in
        offline mode?
      </>
    ),
    answer: (
      <>
        Only selected students from Code Cubicle 3.0 are permitted for offline
        participation.
      </>
    ),
  },
  {
    question: (
      <>
        For the participants in offline mode, will travel reimbursement be
        provided?
      </>
    ),
    answer: (
      <>
        No, Code Cubicle 3.0 does not offer travel reimbursement for
        participants in offline mode. Participants are responsible for their
        travel expenses, and we recommend planning accordingly.
      </>
    ),
  },
  {
    question: <>What exclusive perks are provided to participants?</>,
    answer: (
      <>
        Participants at Code Cubicle 3.0 enjoy exclusive perks, including free
        swags, networking opportunities with industry experts, goodies,
        accommodation, meals, and much more, enhancing their overall experience.
      </>
    ),
  },
  {
    question: <>What should be the team size? </>,
    answer: (
      <>
        The team size can range from a minimum of 1 participant to a maximum of
        4 participants. 🤝
      </>
    ),
  },
  {
    question: <>Are team members from other colleges allowed? </>,
    answer: (
      <>
        Yes, Code Cubicle 3.0 welcomes participants from diverse backgrounds,
        including those from different colleges. The hackathon encourages
        collaboration and networking among individuals with varied experiences
        and expertise. 🌍
      </>
    ),
  },
  {
    question: (
      <>
        What should I bring to Code Cubicle 3.0, and what will be provided by
        the organizers?
      </>
    ),
    answer: (
      <>
        Participants are encouraged to bring their laptops and any specific
        tools or hardware they may need for coding. Organizers will provide the
        necessary infrastructure, but participants should ensure they have
        everything they need for a successful hacking experience.
      </>
    ),
  },
  {
    question: (
      <>
        {" "}
        How can I stay updated on Code Cubicle 3.0 announcements and details?🤔{" "}
      </>
    ),
    answer: (
      <>
        Stay updated on Code Cubicle 3.0 announcements and details by regularly
        checking the official website and on devfolio. Additionally, follow our
        social media channels for the latest news and updates regarding the
        event.
      </>
    ),
  },
  {
    question: (
      <>
        How can participants connect with like-minded individuals and industry
        experts during Code Cubicle?
      </>
    ),
    answer: (
      <>
        Participants can connect with like-minded individuals and industry
        experts through networking sessions, project collaborations, and various
        interactive opportunities provided during Code Cubicle 3.0. It's a
        unique chance to learn, compete, and establish valuable connections.
      </>
    ),
  },
  {
    question: (
      <>
        Who are the organizers of Code Cubicle 3.0, and what is their mission?
      </>
    ),
    answer: (
      <>
        Code Cubicle 3.0 is hosted by the team efforts of Geek Room. Their
        mission is to provide a platform for tech enthusiasts to showcase their
        skills and amplify their potential through an exciting blend of
        competition, learning, and groundbreaking innovation.
      </>
    ),
  },
  {
    question: <>Who are the organizers of Code Cubicle 3.0, and what is their mission?</>,
    answer: <>Code Cubicle 3.0 is hosted by the team efforts of Geek Room. Their mission 
    is to provide a platform for tech enthusiasts to showcase their skills and amplify their 
    potential through an exciting blend of competition, learning, and groundbreaking innovation.</>,
  },
];

export default function FAQ() {
  return (
    <div className="mt-36 sm:mt-24" id="faq">
      <Container>
        <div className="mt-32 flex flex-col gap-12 lg:flex-row-reverse p-10 ">
          <div className="text-center lg:w-5/12 lg:pl-12 lg:text-left  flex flex-col">
            <div className="md:my-16 my-8 text-white text-xl sm:text-2xl md:text-4xl">
              <h2 className="text-2xl font-bold text-white dark:text-white md:text-3xl lg:text-4xl font-logo">
                Have a query ?
              </h2>
            </div>

            <p className="mt-2 font text-white dark:text-gray-300 ">
              Join with Code Cubicle 3.0 and experience the breeze of hackathon
              with us.
            </p>
            <div className="faqContainer1 relative">
              {/* <div className="flex justify-center"> */}

              <img
                src="/assets/images/avatar_faq.png"
                alt="faq boy"
                width={500}
                height={500}
                className="object-contain scale-x-[-1] -translate-x-[-40px] -translate-y-[40px]"
              />
              {/* </div> */}
            </div>
          </div>
          <div className="lg:w-7/12 ">
            <Disclosures />
          </div>
        </div>
      </Container>
    </div>
  );
}

export function Disclosures({ full = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800 hover:cursor-pointer">
      {duHacksFaq.map((item, i) => (
        <div
          key={String(i)}
          className={`mx-auto text-lg ${full ? "" : "max-w-2xl"}`}
        >
          {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
          <div
            className="flex w-full items-start justify-between py-6 text-left text-gray-400"
            onClick={() => handleToggle(i)}
          >
            <span className="font-medium text-white dark:text-white">
              {item.question}
            </span>
            <span className="ml-6 flex h-7 items-center">
              {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
              <svg
                className={`arrow-down h-6 w-6 transform duration-300 ${
                  openIndex === i ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          {openIndex === i && (
            <div
              className={`pr-12 duration-300 ease-in-out ${
                openIndex === i ? "" : "hidden"
              }`}
            >
              <p className="pb-6 text-base text-white dark:text-gray-400">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
