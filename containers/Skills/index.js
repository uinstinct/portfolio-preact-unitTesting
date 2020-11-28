import { useEffect, useRef } from "react";

import constants from "./constants";
import SkillCards from "./skillCard";

import styles from "@/styles/skillsContainer";

function handleInView(entries, container, hasShown, observer) {
    if (entries[0].isIntersecting && !hasShown.current) {
        const progresses = container.getElementsByClassName("bar");
        [].forEach.call(progresses, (progress) => {
            progress.classList.remove("inactive");
        });
        hasShown.current = true;
        observer.disconnect();
    }
}

export default function Skills() {

    const skillCards = constants.map((constant, idx) =>
        <SkillCards
            key={idx} id={idx}
            heading={constant.heading} topics={constant.topics}
        />
    )

    const skillMainContainerRef = useRef(null);
    const hasShown = useRef(false);

    useEffect(() => {   

        const container = skillMainContainerRef.current;

        const progresses = container.getElementsByClassName("bar");
        [].forEach.call(progresses, (progress) => {
            progress.classList.add("inactive");
        });

        const observer = new IntersectionObserver(
            (entries) => handleInView(entries, container, hasShown, observer),
            {
                root: null,
                rootMargin: '0px',
                threshold: 1.0,
            });

        observer.observe(container);
    }, []);

    return (
        <>
            <h1 id="myTechSkills" className="container-header">My Tech Skills</h1>
            <style jsx>
                {styles}
            </style>
            <div
                className="skill-main-container"
                ref={skillMainContainerRef}
            >
                {skillCards}
            </div>
        </>
    );
}