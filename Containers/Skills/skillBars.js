import { useState, useEffect } from 'react';

import ProgressBar from "./progressBar";

import { useColorMode } from "@chakra-ui/core";
import { allStyles, topicStyles } from "../../styles/skillBars";

function SkillBar({ heading, topics, id }) {

    const { colorMode } = useColorMode();

    /*let timer = null;
    const scrollEffect = (e) => {

        console.log(e);
        //clearTimeout(timer);
        //timer = setTimeout(() => {
            const bar = document.getElementById(`skillbar-${id}`)
            console.log(bar, "is the bar");
            const slideInAt =
                window.scrollY + window.innerHeight - bar.height / 5;
            console.info(bar.offsetTop, slideInAt);
            const isHalfShown = slideInAt > bar.offsetTop;
            const barBottom = bar.offsetTop + bar.height;

            const hasNotScrolledPast = window.scrollY < barBottom;
            if (isHalfShown && hasNotScrolledPast) {
                console.log('done');
            }
        //}, 100);
    }

    useEffect(() => {
        console.log('added effect');
        document.addEventListener("scroll", scrollEffect);
        return (
            document.removeEventListener("scroll", scrollEffect)
        );
    }, []);*/

    const topicsDisplay = topics && topics.map((topic, idx) =>
        <div key={idx}>
            <style jsx>
                {topicStyles}
            </style>
            <div className={`skill-progress ${colorMode === "dark" ? "dark" : null}`}>
                <ProgressBar progress={topic.progress} />
                <p>{topic.name}</p>
            </div >
        </div>
    ) || [];

    return (
        <>
            <style jsx>
                {allStyles}
            </style>
            <div className={`skill-container ${colorMode === "dark" ? "dark" : null}`}
                id={`skillbar-${id}`}>
                <div className="skill-header">{heading}</div>
                {topicsDisplay}
            </div>
        </>
    );
};

export default SkillBar;