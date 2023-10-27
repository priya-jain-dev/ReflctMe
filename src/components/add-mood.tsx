"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import MoodItem from "./mood-item";
import { mood } from "@/interface/mood";

export const AddMood = () => {
  const [selectedMoodIndex, setSelectedMoodIndex] = useState<number>(2);
  const moodItems: mood[] = [
    {
      top_bg_color: "bg-[#FFFBED]",
      bg_color: "bg-[#FDDD6F]",
      heading_text_color: "text-[#664F00]",
      heading: "Good",
      images: [
        "/images/good-1.png",
        "/images/good-2.png",
        "/images/good-3.png",
      ],
      animation: "loop",
    },
    {
      top_bg_color: "bg-[#F5F9FF]",
      bg_color: "bg-[#DFEBFF]",
      heading_text_color: "text-[#505D87]",
      heading: "Happy",
      images: [
        "/images/happy-1.png",
        "/images/happy-2.png",
        "/images/happy-3.png",
      ],
      animation: "loop",
    },
    {
      top_bg_color: "bg-[#FFF0F3]",
      bg_color: "bg-[#FFA7BC]",
      heading_text_color: "text-[#4D3238]",
      heading: "Spectacular",
      images: [
        "/images/spectacular-1.png",
        "/images/spectacular-2.png",
        "/images/spectacular-3.png",
      ],
      animation: "loop",
    },
    {
      top_bg_color: "bg-[#EDFEFF]",
      bg_color: "bg-[#A1E7EB]",
      heading_text_color: "text-[#3A7478]",
      heading: "Sad",
      images: ["/images/sad-1.png", "/images/sad-2.png", "/images/sad-3.png"],
      animation: "loop",
    },
    {
      top_bg_color: "bg-[#EBF0FF]",
      bg_color: "bg-[#8CA4EE]",
      heading_text_color: "text-[#313A54]",
      heading: "Upset",
      images: [
        "/images/upset-1.png",
        "/images/upset-2.png",
        "/images/upset-3.png",
      ],
      animation: "loop",
    },
    {
      top_bg_color: "bg-[#FFEFE5]",
      bg_color: "bg-[#FF843E]",
      heading_text_color: "text-[#782E04]",
      heading: "Anger",
      images: [
        "/images/angry1.png",
        "/images/angry2.png",
        "/images/angry3.png",
      ],
      animation: "loop",
    },
  ];

  const handleMoodOptionClick = (index: number) => {
    setSelectedMoodIndex(index);
  };
  const handleNextMood = () => {
    setSelectedMoodIndex((prevIndex) =>
      prevIndex === moodItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousMood = () => {
    setSelectedMoodIndex((prevIndex) =>
      prevIndex === 0 ? moodItems.length - 1 : prevIndex - 1
    );
  };
  return (
    <section
      className={cn(
        "mx-auto flex  rounded-3xl flex-col items-center self-center justify-center p-8 gap-4",
        moodItems[selectedMoodIndex].top_bg_color
      )}
    >
      <MoodItem
        key={selectedMoodIndex}
        item={moodItems[selectedMoodIndex]}
        onPrevious={handlePreviousMood}
        onNext={handleNextMood}
      />

      <div className="flex items-center gap-2 self-end">
        {moodItems.map((option, index) => (
          <div
            key={index}
            className={cn(
              " rounded-full cursor-pointer",
              option.bg_color,
              selectedMoodIndex === index ? "w-8 h-8" : "w-4 h-4"
            )}
            onClick={() => handleMoodOptionClick(index)}
          />
        ))}
      </div>

      <button className="w-full text-center text-[#ffffff] bg-[#000000] rounded-3xl min-h-[44px]">
        Select mood
      </button>
    </section>
  );
};
