import { useState, useEffect } from "react";
import { useColorMode, LightMode } from "@chakra-ui/react";
import {
    handleDragStart, handleDrag, handleDragEnd,
    handleTouchStart, handleTouchEnd
}
    from "./cardMouseMovements";

import {
    RadioGroup,
    Icon, IconButton, Link,
    Tag, TagLabel, TagRightIcon
} from '@chakra-ui/react';

import { allStyles, itemStyles, bulletStyles } from "@/styles/card";
import { glossColour, glossIcon } from "./constants";

export default function Card({ sourceItems, links, stacks }) {

    const { colorMode } = useColorMode();
    const uniqueMark = sourceItems[0].id;
    const [currentItem, setCurrentItem] = useState(uniqueMark);
    const totalItems = sourceItems.length;

    const displayCard = event => {
        const preItem = document.getElementById(`item${currentItem}`);
        preItem.classList.remove("visible");
        const preTap = document.getElementById(`tap${currentItem}`);
        preTap.classList.remove("checked");
        setCurrentItem(parseInt(event.target.value));
    }

    useEffect(() => {
        // this cannot be added in the displayCard function because this is a sideEffect
        const item = document.getElementById(`item${currentItem}`);
        item.classList.add("visible");
        if (totalItems > 1) {
            const tap = document.getElementById(`tap${currentItem}`);
            tap.classList.add("checked");
        }
    }, [currentItem]);


    // on initial component mount
    useEffect(() => {
        const item = document.getElementById(`item${uniqueMark}`);
        item.classList.add("visible");
        if (totalItems > 1) {
            const tap = document.getElementById(`tap${uniqueMark}`);
            tap.classList.add("checked");
        }
    }, []);


    const items = sourceItems.map((sourceItem, idx) => {
        const { id } = sourceItem;
        return (
            <div key={idx}>
                <style jsx>
                    {itemStyles}
                </style>
                <div className={`wrapper ${colorMode === "dark" ? "dark" : null}`}>
                    <div key={idx} className={`source-item-${uniqueMark} item item-${idx + 1}`} id={`item${id}`}>
                        <div className="imageContainer">
                            <img
                                src={sourceItem.imgSrc} alt={sourceItem.title}
                                loading="lazy" height="300" width="300"
                            />
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

    const bullets = totalItems > 1 ? sourceItems.map((sourceItem, idx) => {
        const { id } = sourceItem;
        return (
            <div key={idx}>
                <style jsx>
                    {bulletStyles}
                </style>
                <label htmlFor={`tapInput${id}`} id={`tap${id}`} className="tap tap-${uniqueMark}">
                    <input type="radio" id={`tapInput${id}`} value={id} checked={id === currentItem} onChange={displayCard} />
                </label>
            </div>
        );
    })
        : null;

    const linkButtons = links.map((link, idx) => {
        const icon = <Icon as={glossIcon[link.provider]} />;
        let colour = glossColour[link.provider];

        if ('darkModeColour' in link && colorMode === "dark") {
            colour = link.darkModeColour;
        }

        return (
            <Link isExternal href={link.link} key={idx}>
                <IconButton
                    aria-label={link.provider}
                    icon={icon} color={colour}
                    variant="ghost" isRound="true" size="lg"
                />
            </Link>
        );
    })

    const stackTags = stacks.map((stack, idx) => {
        const icon = glossIcon[stack] || glossIcon["other"];
        const colour = glossColour[stack] || "gray";

        return (
            <Tag
                key={idx} colorScheme={colour}
                rounded="full" variant="solid"
            >
                <TagLabel>{stack}</TagLabel>
                <TagRightIcon as={icon} />
            </Tag>
        );
    })

    return (
        <>
            <style jsx>
                {allStyles}
            </style>
            <div
                className={`card ${colorMode === "dark" ? "dark" : null}`}

                onMouseDown={(event) => handleDragStart(event, totalItems)}
                onMouseMove={(event) =>
                    handleDrag(
                        event, uniqueMark, totalItems,
                        currentItem, displayCard
                    )
                }
                onMouseUp={() => handleDragEnd()}

                onTouchStart={(event) => handleTouchStart(event)}
                onTouchEnd={(event) =>
                    handleTouchEnd(
                        event, uniqueMark, totalItems,
                        currentItem, displayCard
                    )
                }
            >
                {items}
                <div className="bullets"
                    style={{ top: `calc(100%/${items.length})` }}
                >
                    <RadioGroup defaultValue="1" value={currentItem} >
                        <div className="sliders">
                            {bullets}
                        </div>
                    </RadioGroup>
                </div>
                <LightMode>
                    <div className="links">
                        {linkButtons}
                    </div>
                    <div className="stacks">
                        {stackTags}
                    </div>
                </LightMode>
            </div>
        </>
    );
}