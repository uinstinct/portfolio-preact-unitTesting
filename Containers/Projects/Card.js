import { useState, useEffect } from 'react';

import { RadioGroup, Radio } from '@chakra-ui/core';
import styles from "../../styles/card";

function Card({ sourceItems }) {

    const [currentCard, setCurrentCard] = useState(1);

    const displayCard = event => {
        setCurrentCard(parseInt(event.target.value));
    }

    useEffect(() => {
        const items = document.getElementsByClassName("item");
        for (const iEl of items) {
            iEl.style.visibility = "hidden";
            iEl.style.opacity = 0;
        }
        const item = document.getElementById(`item${currentCard}`);
        item.style.visibility = "visible";
        item.style.opacity = 1;
    },[currentCard])

    const items = sourceItems.map((sourceItem, idx) => {
        return (
            <div key={idx}>
                <style jsx>
                    {styles}
                </style>
                <div className="wrapper">
                    <div key={idx} className={`item item-${idx + 1}`} id={`item${idx + 1}`}>
                        <div className="imageContainer">
                            <img src={`${sourceItem.imgSrc}`} alt={`${sourceItem.imgAlt}`} />
                        </div>
                        <div className="content">
                            <div className="title">{sourceItem.title}</div>
                            <div className="description">{sourceItem.description}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    const bullets = sourceItems.map((sourceItem, idx) => {
        return (
            <div key={idx}>
                <style jsx>
                    {styles}
                </style>
                <Radio value={idx + 1} variantColor="red" isChecked={idx + 1 === currentCard} onChange={displayCard} />
            </div>
        );
    });

    return (
        <>
            <style jsx>
                {styles}
            </style>
            <div className="card">
                {items}
                <div className="bullets" style={{ top: `calc(100%/${items.length})` }}>
                    <RadioGroup defaultValue="1" value={currentCard} >
                        {bullets}
                    </RadioGroup>
                </div>
                <div className="links">repo link</div>
            </div>
        </>
    );
}

export default Card;