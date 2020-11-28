import {
    Icon, IconButton, Link,
    Tag, TagLabel, TagRightIcon
} from '@chakra-ui/react';

import { glossColour, glossIcon } from "./constants";

import styles from '@/styles/extras.module.css';
import { itemStyles, bulletStyles } from '@/styles/card';


export const LinkButtons = (links, colorMode) =>
    links.map((link, idx) => {
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
    });

export const StackTags = (stacks) =>
    stacks.map((stack, idx) => {
        const icon = glossIcon[stack] || glossIcon["other"];
        const colour = glossColour[stack] || "gray";

        return (
            <Tag
                key={idx} colorScheme={colour}
                rounded="full" variant="solid"
                className={styles.tag}
            >
                <TagLabel>{stack}</TagLabel>
                <TagRightIcon as={icon} />
            </Tag>
        );
    });

export const CardItems = (sourceItems, colorMode, uniqueMark) =>
    sourceItems.map((sourceItem, idx) => {
        const { id } = sourceItem;
        return (
            <div key={idx}>
                <style jsx>
                    {itemStyles}
                </style>
                <div className={`wrapper ${colorMode === "dark" ? "dark" : null}`}>
                    <div
                        key={idx} id={`item${id}`}
                        className={`source-item-${uniqueMark} item item-${idx + 1}`}
                    >
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

export const RadioBullets =
    (sourceItems, uniqueMark, currentItem, totalItems, displayCard) =>
        totalItems > 1 ? sourceItems.map((sourceItem, idx) => {
            const { id } = sourceItem;
            return (
                <div key={idx}>
                    <style jsx>
                        {bulletStyles}
                    </style>
                    <label
                        htmlFor={`tapInput${id}`} id={`tap${id}`}
                        className="tap tap-${uniqueMark}"
                    >
                        <input type="radio" id={`tapInput${id}`}
                            value={id}
                            checked={id === currentItem}
                            onChange={displayCard}
                        />
                    </label>
                </div>
            );
        })
            : null;