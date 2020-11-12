import ProgressBar from "./progressBar";
import { glossIcon, glossColour } from "./constants";

import { useColorMode, Icon } from "@chakra-ui/core";
import { allStyles, topicStyles } from "@/styles/skillCard";
import { handleMouseMove, handleMouseLeave }
    from "./skillMouseMovements";

export default function SkillBar({ heading, topics, id }) {

    const { colorMode } = useColorMode();

    const topicsDisplay = topics && topics.map((topic, idx) => {
        const name = topic.icon || (topic.name && topic.name.toLowerCase())
            || "other";
        const iconName = glossIcon[name] || glossIcon["other"];
        const iconColour = glossColour[name] || glossColour["other"];

        return (
            <div key={idx}>
                <style jsx>
                    {topicStyles}
                </style>
                <div className={`skill-progress ${colorMode === "dark" ? "dark" : null}`}>
                    <ProgressBar progress={topic.progress} />
                    <p><Icon style={{ margin: "0.25rem 1rem 0 0", }}
                        as={iconName} color={iconColour}
                    />{topic.name}</p>
                </div >
            </div>
        );
    }
    ) || [];

    let skillCardEl = null;
    return (
        <>
            <style jsx>
                {allStyles}
            </style>
            <div
                className={`skill-container ${colorMode === "dark" ? "dark" : null}`}
                ref={el => skillCardEl = el}
                id={`skillbar-${id}`}
                onMouseMove={(event) => handleMouseMove(event, skillCardEl)}
                onMouseLeave={() => handleMouseLeave(skillCardEl)}
            >
                <div className="skill-header">{heading}</div>
                {topicsDisplay}
            </div>
        </>
    );
};