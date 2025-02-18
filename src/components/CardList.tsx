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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewCard((prev) => ({
            ...prev,
            [name]: name === "priority" ? Number(value) as CardPriority : value,
        }));
    };

   
     const handleAddCard = () => {
        if (!newCard.title || !newCard.description) {
            alert("Enter title and description");
            return;
        }

        const newCardData: CardType = {
            id: Date.now(),
            title: newCard.title,
            description: newCard.description,
            status: false,
            priority: newCard.priority,
        };

        setCards((prevCards) => [...prevCards, newCardData]);
        setNewCard({ title: "", description: "", priority: CardPriority.Low });
    };


    const handleUpdateCardStatus = (id: number) => {
        setCards((prevCards) =>
            prevCards.map((card) =>
                card.id === id ? { ...card, status: true } : card
            )
        );
    };

    const handleDeleteCard = (id: number) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    };


    const sortedCards = [...cards].sort((a, b) =>
        sortOrder === SortOrder.HighToLow ? b.priority - a.priority : a.priority - b.priority
    );

    return (
        <div>
            <h1>Card Manager</h1>

            <div className="card-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Card name"
                    value={newCard.title}
                    onChange={handleInputChange}
                />
                    <textarea
                        name="description"
                        placeholder="Enter card description..."
                        value={newCard.description}
                        onChange={handleInputChange}
                    />
                <select name="priority" value={newCard.priority} onChange={handleInputChange}>
                    <option value={CardPriority.Low}>Low</option>
                    <option value={CardPriority.Medium}>Medium</option>
                    <option value={CardPriority.High}>High</option>
                </select>
                <button onClick={handleAddCard}>Add card</button>

                <div>
                    <Filter sortOrder={sortOrder} setSortOrder={setSortOrder} />
                </div>
            </div>

            <ul className="card-list">
                {sortedCards.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        status={card.status}
                        priority={card.priority}
                        onComplete={() => handleUpdateCardStatus(card.id)}
                        onDelete={() => handleDeleteCard(card.id)} // 
                    />
                ))}
            </ul>
        </div>
    );
}