/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import About from "./About";
import Navigation from "./Navigation";
import Contact from "./Contact";
import data from "../data/Data";

const GeneralInformation = () => {
	const { name, about, sections } = data;
	return (
		<div
			css={css`
				flex-basis: 45%;
			`}
		>
			<section
				css={css`
					@media only screen and (min-width: 1200px) {
						position: fixed;
						width: calc((100vw - 40rem) * 45/100);
					}
				`}
			>
				<About name={name} about={about} />
				<Navigation sections={sections} />
				<Contact />
			</section>
		</div>
	);
};

export default GeneralInformation;
