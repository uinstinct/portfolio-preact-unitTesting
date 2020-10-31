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
        <>
            <style jsx>
                {styles}
            </style>
            <div className="container">
                {skillBars}
            </div>
        </>
    );
}

export default Skills;