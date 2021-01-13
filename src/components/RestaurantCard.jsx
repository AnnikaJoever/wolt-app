import React from 'react';

const RestaurantCard = (props) => {
    const {
        name,
        image,
        description,
        tags,
        online,
    } = props;
    
    const closed = online === false ? <div className="offline">Suljettu</div> : '';

    return (
        <div className="list_item">
            <div className="restaurant_card">
                <div className="card_image" style={{ backgroundImage: `url(${image})` }}>
                    { closed }
                </div>
                <div className="card_info_container">
                    <div className="card_title_text">
                        <div className="card_title">{ name }</div>
                        <p className="card_description">{ description }</p>
                    </div>
                    <div className="card_tags">
                        <p>{ tags.join(', ') }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantCard;