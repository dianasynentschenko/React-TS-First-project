import React, { useState } from "react";
import Card, { CardPriority } from "./Card";
import Filter from "./CardPrioritySort";
import { SortOrder } from "./CardPrioritySort";

export default function CardList() {
    const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.HighToLow);

    const [cards, setCards] = useState([
        { id: 1, title: "Title 1", description: "Description", status: false, priority: CardPriority.High },
        { id: 2, title: "Title 2", description: "Description", status: true, priority: CardPriority.Low },
        { id: 3, title: "Title 3", description: "Description", status: false, priority: CardPriority.Medium },
    ]);

    
    const updateCardStatus = (id: number) => {
        setCards(cards.map(card => (card.id === id ? { ...card, status: true } : card)));
    };


    const sortedCards = [...cards].sort((a, b) => {
        return sortOrder === SortOrder.HighToLow
            ? b.priority - a.priority  // High → Low
            : a.priority - b.priority; // Low → High
    });

    return (
        <div>
            <h1>Card Manager</h1>
            <Filter sortOrder={sortOrder} setSortOrder={setSortOrder} />
            <ul>
                {sortedCards.map(card => (
                    <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        status={card.status}
                        priority={card.priority}
                        onComplete={() => updateCardStatus(card.id)}
                    />
                ))}
            </ul>
        </div>
    );
}