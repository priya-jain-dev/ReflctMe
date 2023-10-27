"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { MoodItem } from "./mood-item";
import { moodItems } from "@/lib/data";

export const AddMood = () => {
  const [selectedMoodIndex, setSelectedMoodIndex] = useState<number>(2);

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
