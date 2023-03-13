import React from 'react';
import {
    SiJavascript,
    SiExpress,
    SiReact,
    SiNodedotjs,
    SiMongodb,
    SiHeroku,
    SiGit,
    SiApollographql,
    SiHtml5,
    SiCss3
} from "react-icons/si";

import {TbSql} from 'react-icons/tb'

function Skills() {
    return (
        <div className="d-flex flex-wrap mx-auto">
        <div className="tech-icons">
          <SiJavascript size={60} />
        </div>
        <div className="tech-icons">
          <SiCss3 size={60} />
        </div>
        <div className="tech-icons">
          <SiHtml5 size={60} />
        </div>
        <div  className="tech-icons">
          <SiMongodb size={60} />
        </div>
        <div  className="tech-icons">
          <SiExpress size={60} />
        </div>
        <div  className="tech-icons">
          <SiReact size={60} />
        </div>
        <div  className="tech-icons">
          <SiNodedotjs size={60} />
        </div>
        <div  className="tech-icons">
          <SiHeroku size={60} />
        </div>
        <div className="tech-icons">
          <SiGit size={60} />
        </div>
        <div  className="tech-icons">
          <SiHeroku size={60} />
        </div>
        <div className="tech-icons">
          <SiApollographql size={60} />
        </div>
        <div className="tech-icons">
          <TbSql size={60} />
        </div>
      </div>
    )
}

export default Skills;