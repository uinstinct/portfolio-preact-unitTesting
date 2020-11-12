import constants from "./constants";
import SkillCards from "./skillCard";

import styles from "@/styles/skillsContainer";

export default function Skills() {

    const skillCards = constants.map((constant, idx) =>
        <SkillCards key={idx}
            heading={constant.heading} topics={constant.topics}
            id={idx}/>
    )
    return (
        <>
            <h1 id="myTechSkills" className="container-header">My Tech Skills</h1>
            <style jsx>
                {styles}
            </style>
            <div className="skill-main-container">
                {skillCards}
            </div>
        </>
    );
}