

export enum SortOrder {
    HighToLow = "HighToLow",
    LowToHigh = "LowToHigh",
}

interface CardPrioritySortProps{
    sortOrder: SortOrder;
    setSortOrder: (order: SortOrder) => void;
}

const CardPrioritySort: React.FC<CardPrioritySortProps> = ({sortOrder, setSortOrder}) => {
    return (
        <div className="sort-buttons">
            <button
                onClick={() => setSortOrder(SortOrder.HighToLow)}
                className={sortOrder === SortOrder.HighToLow ? "active" : ""}
            >
                HighToLow
            </button>
            <button
                onClick={() => setSortOrder(SortOrder.LowToHigh)}
                className={sortOrder === SortOrder.LowToHigh ? "active" : ""}
            >
                LowToHigh
            </button>
        </div>

    );
};

export default CardPrioritySort;