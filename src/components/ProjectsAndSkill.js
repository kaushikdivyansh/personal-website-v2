/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Projects from "./Projects"
import Skills from "./Skills";
import data from "../data/Data";

const ProjectsAndSkills = () => {
  const {skills, projects} = data
  return (
		<section
			css={css`
				@media only screen and (min-width: 1200px) {
					flex-basis: 55%;
					/* overflow-y: scroll; */
				}
			`}
		>
			<Skills skills={skills} />
			<Projects projects={projects} />
		</section>
	);
}

export default ProjectsAndSkills