/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import About from "./About";
import Navigation from "./Navigation";
import Contact from "./Contact";
import data from "../data/Data";

const GeneralInformation = () => {
	const { name, about, sections } = data;
	return (
		<section
			css={css`
				@media only screen and (min-width: 1200px) {
					flex-basis: 45%;
				}
			`}
		>
			<About name={name} about={about} />
			<Navigation sections={sections} />
			<Contact />
		</section>
	);
};

export default GeneralInformation;
