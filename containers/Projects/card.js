import { useState, useEffect } from "react";
import { useColorMode, LightMode } from "@chakra-ui/react";

import {
    handleDragStart, handleDrag, handleDragEnd,
    handleTouchStart, handleTouchEnd
} from "./cardMouseMovements";
import {
    LinkButtons, StackTags, CardItems, RadioBullets
} from './cardComponents';

import {
    RadioGroup,
} from '@chakra-ui/react';

import { allStyles } from "@/styles/card";


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
        const item = document.getElementById(`item${currentItem}`);
        item.classList.add("visible");
        if (totalItems > 1) {
            const tap = document.getElementById(`tap${currentItem}`);
            tap.classList.add("checked");
        }
    }, [currentItem]);

    useEffect(() => {
        const item = document.getElementById(`item${uniqueMark}`);
        item.classList.add("visible");
        if (totalItems > 1) {
            const tap = document.getElementById(`tap${uniqueMark}`);
            tap.classList.add("checked");
        }
    }, []);

    const Links = LinkButtons(links, colorMode);
    const Stacks = StackTags(stacks);
    const Items = CardItems(sourceItems, colorMode, uniqueMark);
    const Bullets = RadioBullets(sourceItems, uniqueMark, currentItem, totalItems, displayCard);

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
                {Items}
                <div className="bullets"
                    style={{ top: `calc(100%/${Items.length})` }}
                >
                    <RadioGroup defaultValue="1" value={currentItem} >
                        <div className="sliders">
                            {Bullets}
                        </div>
                    </RadioGroup>
                </div>
                <LightMode>
                    <div className="links">
                        {Links}
                    </div>
                    <div className="stacks">
                        {Stacks}
                    </div>
                </LightMode>
            </div>
        </>
    );
}