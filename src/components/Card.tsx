import { useState } from "react";

export enum CardPriority {
  Low = 1,
  Medium = 2,
  High = 3,
}

type CardProps = {
  title: string;
  description: string;
  status: boolean;
  priority: CardPriority;
  onComplete: () => void;
};

export default function Card({
  title,
  description,
  status,
  priority,
  onComplete
}: CardProps) {
  const [completed, setCompleted] = useState(status);

  const priorityColor = {
    [CardPriority.Low]: "priority priority-low",
    [CardPriority.Medium]: "priority priority-medium",
    [CardPriority.High]: "priority priority-high",
  };

  return (
    <li>
      <article>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>

          <span className="status status-pending">
            {completed ? "Completed" : "Pending"}
          </span>
          <span className={`text-sm font-semibold ${priorityColor[priority]}`}>
            {priority === CardPriority.High ? "High" : priority === CardPriority.Medium ? "Medium" : "Low"}
          </span>
        </div>

        <button
          onClick={() => {
            setCompleted(true);
            onComplete();
          }}
          disabled={completed}
          className={`mt-4 px-4 py-2 rounded-md font-bold transition ${
            completed
              ? "bg-transparent text-gray-400 border border-gray-400 cursor-not-allowed"
              : "bg-green-500 text-white"
          }`}
        >
          {completed ? "Completed" : "Complete"}
        </button>
      </article>
    </li>
  );
}
