import { useState } from "react";

export enum CardPriority {
  Low = 1,
  Medium = 2,
  High = 3,
}

export type CardType = {
  id: number;
  title: string;
  description: string;
  status: boolean;
  priority: CardPriority;
};

type CardProps = {
  title: string;
  description: string;
  status: boolean;
  priority: CardPriority;
  onComplete: () => void;
  onDelete: () => void;
};

export default function Card({
  title,
  description,
  status,
  priority,
  onComplete,
  onDelete
}: CardProps) {
  const [completed, setCompleted] = useState(status);

  const priorityColor = {
    [CardPriority.Low]: "priority priority-low",
    [CardPriority.Medium]: "priority priority-medium",
    [CardPriority.High]: "priority priority-high",
  };

  const [expanded, setExpanded] = useState(false);

  return (
    <li className="card">
      <article>
        <div>
          <h2>{title}</h2>
          
          <p className={`card-description ${expanded ? "expanded" : ""}`}>
                    {description}
                </p>

                
                {description.length > 100 && (
                    <button className="read-more" onClick={() => setExpanded(!expanded)}>
                        {expanded ? "Read Less" : "Read More"}
                    </button>
                )}

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
        <button onClick={onDelete} className="delete-btn"> Delete</button>

      </article>
    </li>
  );
}
