import './App.css';
import { useState } from 'react';
import AppHeader from './component/AppHeader';
import AppFeed from './component/AppFeed';
import AppSearch from './component/AppSearch';
import coffees from './data/coffees';
import CoffeeItem from './component/CoffeeItem';
import CoffeePost from './component/CoffeePost';

function App() {
    const [selectedCoffee, setSelectedCoffee] = useState(null);
    const [searchText, setSearchText] = useState('');

    function onCoffeeOpenClick(theCoffee) {
        setSelectedCoffee(theCoffee);
    }

    function onCoffeeCloseClick() {
        setSelectedCoffee(null);
    }

    const coffeeElements = coffees.filter((coffee) => {
        return coffee.title.includes(searchText);
    }).map((coffee, index) => {
        return <CoffeeItem key={index} coffee={coffee} onCoffeeClick={onCoffeeOpenClick} />;
    });

    let coffeePost = null;
    if (!!selectedCoffee) {
        coffeePost = <CoffeePost coffee={selectedCoffee} onBgClick={onCoffeeCloseClick} />
    }

    return (
        <div className="App">
            <AppHeader />
            <AppFeed />
            <section className="app-section">
                <div className="app-container">
                    <AppSearch value={searchText} onValueChange={setSearchText} />
                    <div className="app-grid">
                        {coffeeElements}
                    </div>
                </div>
            </section>
            {coffeePost}
        </div>
    );
}

export default App;

