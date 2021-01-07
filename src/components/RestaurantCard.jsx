import React from 'react';
import restaurants from '../data/restaurants.json';

const RestaurantCard = () => {
    console.log(restaurants);
    return (
        <div className="card_list_container">
            {
                restaurants.restaurants.map((item) => (
                    <div key={ item.name } className="list_item">
                        <div className="restaurant_card">
                            <div className="card_image" style={{ backgroundImage: `url(${item.image})` }} />
                            <div className="card_info_container">
                                <div className="card_title_text">
                                    <div className="card_title">{ item.name }</div>
                                    <p className="card_description">{ item.description }</p>
                                </div>
                                <div className="card_tags">
                                    <p>{ item.tags.join(', ') }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default RestaurantCard;