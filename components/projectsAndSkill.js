import { css } from "@emotion/react"
import Projects from "./projects"
import Skills from "./skills"
import { data } from "../data/data"

const ProjectsAndSkills = () => {
  const { skills, projects } = data
  return (
    <section
      css={css`
        @media only screen and (min-width: 1200px) {
          flex-basis: 60%;
        }
        @media only screen and (min-width: 1440px) {
          flex-basis: 55%;
        }
      `}
    >
      <Skills skills={skills} />
      <Projects projects={projects} />
    </section>
  )
}

export default ProjectsAndSkills
