import React, { useState } from "react";
import Card, { CardPriority, CardType } from "./Card";

import Filter from "./CardPrioritySort";
import { SortOrder } from "./CardPrioritySort";

export default function CardList() {
    const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.HighToLow);

    const [cards, setCards] = useState<CardType[]>([]);

    const [newCard, setNewCard] = useState({
        title: "",
        description: "",
        priority: CardPriority.Low, 
    });

    const updateCardStatus = (id: number) => {
        setCards(cards.map(card => (card.id === id ? { ...card, status: true } : card)));
    };

    const addCard = () => {
        if (!newCard.title || !newCard.description) {
            alert("Enter title and description");
            return;
        }

        const newCardData = {
            id: Date.now(), 
            title: newCard.title,
            description: newCard.description,
            status: false, 
            priority: newCard.priority,
        };

        setCards([...cards, newCardData]);

        setNewCard({ title: "", description: "", priority: CardPriority.Low });
    };

    const sortedCards = [...cards].sort((a, b) => {
        return sortOrder === SortOrder.HighToLow
            ? b.priority - a.priority  // High → Low
            : a.priority - b.priority; // Low → High
    });

    return (
        <div>
            <h1>Card Manager</h1>
            

            <div className="card-form">
                <input
                    type="text"
                    placeholder="Card name"
                    value={newCard.title}
                    onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Card description"
                    value={newCard.description}
                    onChange={(e) => setNewCard({ ...newCard, description: e.target.value })}
                />
                <select
                    value={newCard.priority}
                    onChange={(e) => setNewCard({ ...newCard, priority: Number(e.target.value) as CardPriority })}
                >
                    <option value={CardPriority.Low}>Low</option>
                    <option value={CardPriority.Medium}>Medium</option>
                    <option value={CardPriority.High}>High</option>
                </select>
                <button onClick={addCard}>Add card</button>

                <div>
                     <Filter sortOrder={sortOrder} setSortOrder={setSortOrder} />
                </div>

               
            </div>




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