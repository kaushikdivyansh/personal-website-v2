import React from 'react';
import Layout from "./components/layout/Layout"
import GeneralInformation from "./components/GeneralInformation"
import ProjectsAndSkills from "./components/ProjectsAndSkill";


const App = () => {
  return (
		<Layout>
      <GeneralInformation />
			<ProjectsAndSkills />
		</Layout>
	);
}

export default App;
