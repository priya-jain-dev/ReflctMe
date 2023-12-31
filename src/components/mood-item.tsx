"use client";
import { mood } from "@/interface/mood";
import { cn } from "@/lib/utils";
import { Icons } from "./ui/icons";
import Image from "next/image";

const MoodItem: React.FC<{
  item: mood;
  onPrevious: () => void;
  onNext: () => void;
}> = ({ item, onPrevious, onNext }) => {
  const { bg_color, heading_text_color, heading, images } = item;

  return (
    <div
      className={cn(
        "rounded-3xl h-[25.6875rem] w-[20.9375rem] p-2 flex items-center justify-center flex-col gap-2",
        bg_color
      )}
    >
      <h1
        className={cn(
          "text-center text-4xl font-extrabold",
          heading_text_color
        )}
      >
        Hey, How are you feeling today?
      </h1>
      <div
        className={cn(
          "text-center text-lg flex flex-col items-center justify-center gap-2",
          heading_text_color
        )}
      >
        <h2 className="text-2xl">{heading}</h2>
        <div className="flex flex-row">
          <button onClick={onPrevious} className={heading_text_color}>
            <Icons.arrowLeft />
          </button>
          <div className="relative loop">
            {item.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                width={400}
                height={400}
              />
            ))}
          </div>
          <button onClick={onNext} className={item.heading_text_color}>
            <Icons.arrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoodItem;
