import { useState, useEffect } from 'react';
import NextImage from 'next/image';

import { RadioGroup, Radio, IconButton, Link, Tag, TagLabel, TagIcon, ControlBox } from '@chakra-ui/core';

import { glossColour, glossIcon } from "./constants"
import styles from "../../styles/card";

function Card({ sourceItems, links, stacks }) {

    const uniqueMark = sourceItems[0].id;
    const [currentCard, setCurrentCard] = useState(uniqueMark);

    const displayCard = async event => {
        const preItem = document.getElementById(`item${currentCard}`);
        preItem.classList.remove("visible");
        const preTap = document.getElementById(`tap${currentCard}`);
        preTap.classList.remove("checked");
        setCurrentCard(parseInt(event.target.value));
    }

    useEffect(() => {
        // this cannot be added in the displayCard function because this is a sideEffect
        const item = document.getElementById(`item${currentCard}`);
        item.classList.add("visible");
        const tap = document.getElementById(`tap${currentCard}`);
        tap.classList.add("checked");
    }, [currentCard]);

    useEffect(() => {
        const item = document.getElementById(`item${uniqueMark}`);
        item.classList.add("visible");
        const tap = document.getElementById(`tap${uniqueMark}`);
        tap.classList.add("checked");
    }, []);


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
            <div key={idx}>
                <style jsx>
                    {styles}
                </style>
                <label htmlFor={`tapInput${id}`} id={`tap${id}`} className="tap tap-${uniqueMark}">
                    <input type="radio" id={`tapInput${id}`} value={id} checked={id === currentCard} onChange={displayCard} />
                </label>
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

    const stackTags = stacks.map((stack, idx) => {
        const icon = glossIcon[stack] || glossIcon["other"];
        const colour = glossColour[stack] || "gray";

        return (
            <Tag key={idx} rounded="full" variantColor={colour} variant="solid">
                <TagLabel>{stack}</TagLabel>
                <TagIcon icon={icon} />
            </Tag>
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
                        <div className="sliders">
                            {bullets}
                        </div>
                    </RadioGroup>
                </div>
                <div className="links">
                    {linkButtons}
                </div>
                <div className="stacks">
                    {stackTags}
                </div>
            </div>
        </>
    );
}

export default Card;