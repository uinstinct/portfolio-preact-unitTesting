import { useState } from "react";

import ProgressBar from "./progressBar";

import { useColorMode } from "@chakra-ui/core";
import { allStyles, topicStyles } from "../../styles/skillBars";

function SkillBars({ heading, topics }) {

    const { colorMode } = useColorMode();
    const [width, setWidth] = useState(0);
    setTimeout(() => {
        setWidth(80);
    }, 1000);

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
            <div className={`skill-container ${colorMode === "dark" ? "dark" : null}`}>
                <div className="skill-header">{heading}</div>
                {topicsDisplay}
            </div>
        </>
    );
};

export default SkillBars;