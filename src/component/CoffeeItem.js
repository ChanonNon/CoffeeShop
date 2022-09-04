import "./CoffeeItem.css";

function CoffeeItem(props) {
    const { coffee, onCoffeeClick } = props;
    return (
        <div className="coffee-item">
            <img src={coffee.thumbnailUrl} onClick={() => {onCoffeeClick(coffee)}} />
            <h4>{coffee.title}</h4>
        </div>
    )
}

export default CoffeeItem;
