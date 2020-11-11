import constants from "./constants";
import SkillCards from "./skillCard";

import styles from "../../styles/skillsContainer";

function Skills() {

    const skillCards = constants.map((constant, idx) =>
        <SkillCards key={idx}
            heading={constant.heading} topics={constant.topics}
            id={idx}/>
    )
    return (
        <div id="myTechSkills">
            <style jsx>
                {styles}
            </style>
            <div className="skill-main-container">
                {skillCards}
            </div>
        </div>
    );
}

export default Skills;