import React, { useState } from 'react';
import restaurants from '../data/restaurants.json';
import RestaurantCard from './RestaurantCard';

const CardContainer = () => {
    const [items, setItems] = useState(restaurants.restaurants);
    const [sortConfig, setSortConfig] = useState({ dir: null });

    const sortRestaurants = () => {
        let dir = 'asc';

        if (sortConfig.dir === 'asc') {
            dir = 'desc';
        }

        setSortConfig({ dir });
        setItems(items.sort(sorting));
    };

    const sorting = (a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();

        if (aName > bName) {
            return (sortConfig.dir === 'asc') ? -1 : 1;
        }
        if (aName < bName) {
            return (sortConfig.dir === 'asc') ? 1 : -1;
        }
        return 0;
    };

    return (
        <>
            <div className="card_list_wrapper">
                <div className="search_bar">
                    <button type="button" className="button" onClick={ () => sortRestaurants() }>Järjestä nimen mukaan</button>
                </div>
                <div className="card_list_container">
                    {
                        items.map((item) => (
                            <RestaurantCard
                                key={ item.name }
                                { ...item }
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default CardContainer;