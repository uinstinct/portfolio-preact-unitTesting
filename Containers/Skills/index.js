import constants from "./constants";
import SkillBar from "./skillBars";

import styles from "../../styles/skillsContainer";

function Skills() {

    const skillBars = constants.map((constant, idx) =>
        <SkillBar key={idx}
            heading={constant.heading} topics={constant.topics}
            id={idx}/>
    )
    return (
        <div id="myTechSkills">
            <style jsx>
                {styles}
            </style>
            <div className="skill-main-container">
                {skillBars}
            </div>
        </div>
    );
}

export default Skills;