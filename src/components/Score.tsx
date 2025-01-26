"use client";
import { FaCircle } from "react-icons/fa6";

export default function Score({
  score,
  maxScore,
}: {
  score: number;
  maxScore: number;
}) {

  return (
    <div className="flex flex-row gap-2">
      {[...Array(maxScore)].map((circle, index) => {
        const currentRating = index + 1;

        return (
          <div
            className="text-md border-black border-2 rounded-full"
            key={index}
            style={{
              color: currentRating <= score ? "#ffc107" : "#4b5563",
            }}
          >
            <FaCircle />
          </div>
        );
      })}
    </div>
  );
}
