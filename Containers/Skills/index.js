import { useEffect, useState } from 'react';

import constants from "./constants";
import SkillBar from "./skillBars";

function Skills() {
    
    

    const skillBars = constants.map((constant, idx) =>
        <SkillBar key={idx} heading={constant.heading} topics={constant.topics}
            id={idx}/>
    )
    return (
        <>
            {skillBars}
        </>
    );
}

export default Skills;