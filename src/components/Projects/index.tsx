import React from "react";
import { ThreeDCardDemo } from "../Card";

export const Projects = () => {
  const details = [
    {
      title: "AI SASS Chatbot",
      description:
        "Add your own custom trained chatbot on your website, that answers your business specific questions.",
      image: "/image.png",
      sourceLink: "https://github.com/mayank2130/sass-AI-chatbot",
      siteLink: "",
    },
    {
      title: "Freelance Website",
      description:
        "A interactive way to apply for gigs, a bidding system. Select people with lowest bids and of highest quality",
      sourceLink: "https://github.com/mayank2130/bid-for-work",
      image: "/bids.png",
      siteLink: "https://bid-for-work-docs.vercel.app/web",
    },
    {
      title: "Custom Phone Case",
      description:
        "Create your own custom phone case. Add images and choose texture options to make your drean phone case.",
      image: "/phonecase.png",
      sourceLink: "https://github.com/mayank2130/cobracase-dev",
      siteLink: "https://cobracase-dev.vercel.app",
    },
  ];
  return (
    <div className="flex flex-row justify-center gap-5">
      {details.map((data) => (
        <ThreeDCardDemo
          key={data.title}
          title={data.title}
          description={data.description}
          sourceLink={data.sourceLink}
          siteLink={data.siteLink}
          image={data.image}
        />
      ))}
    </div>
  );
};
