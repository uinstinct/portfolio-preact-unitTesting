import { useState, useEffect } from 'react';
import NextImage from 'next/image';

import { RadioGroup, Radio, IconButton, Link } from '@chakra-ui/core';

import { GoMarkGithub } from 'react-icons/go';
import { BiLink } from 'react-icons/bi';
import { FaPenNib } from 'react-icons/fa';

import styles from "../../styles/card";


const glossIcon = {
    "github": GoMarkGithub,
    "app": BiLink,
    "blog": FaPenNib,
}
const glossColour = {
    "github": "#C4F1F9",
    "app": "#9ae6b4",
    "blog": "#feb2b2",
}

function Card({ sourceItems, links }) {

    const uniqueMark = sourceItems[0].id;
    const [currentCard, setCurrentCard] = useState(uniqueMark);

    const displayCard = async event => {
        const preItem = document.getElementById(`item${currentCard}`);
        preItem.classList.remove("visible");
        setCurrentCard(parseInt(event.target.value));
    }

    useEffect(() => {
        // this cannot be added in the displayCard function because this is a sideEffect
        const item = document.getElementById(`item${currentCard}`);
        item.classList.add("visible");
    }, [currentCard]);

    useEffect(() => {
        const item = document.getElementById(`item${uniqueMark}`);
        item.classList.add("visible");
    }, [])


    const items = sourceItems.map((sourceItem, idx) => {
        const { id } = sourceItem;
        return (
            <div key={idx}>
                <style jsx>
                    {styles}
                </style>
                <div className="wrapper">
                    <div key={idx} className={`source-item-${uniqueMark} item item-${idx + 1}`} id={`item${id}`}>
                        <div className="imageContainer">
                            <img src={`${sourceItem.imgSrc}`} alt={`${sourceItem.title}`}
                                loading="lazy" />
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

    const bullets = sourceItems.length > 1 ? sourceItems.map((sourceItem, idx) => {
        const { id } = sourceItem;
        return (
            <div key={id}>
                <style jsx>
                    {styles}
                </style>
                <Radio value={id} variantColor="red" isChecked={id === currentCard} onChange={displayCard} />
            </div>
        );
    })
        : null;

    const linkButtons = links.map((link, idx) => {
        const icon = glossIcon[link.provider];
        const colour = glossColour[link.provider];

        return (
            <Link isExternal href={link.link} key={idx}>
                <IconButton aria-label={link.provider} icon={icon} color={colour}
                    variant="ghost" isRound="true" size="lg" />
            </Link>
        );
    })

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
                <div className="links">
                    {linkButtons}
                </div>
            </div>
        </>
    );
}

export default Card;