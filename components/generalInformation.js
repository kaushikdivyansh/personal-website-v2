import { css } from "@emotion/react";
import About from "./about";
import Navigation from "./navigation";
import Contact from "./contact";
import { data } from "../data/data"

const GeneralInformation = () => {
	const { name, about, sections } = data;
	return (
		<div
			css={css`
				@media only screen and (min-width: 1200px) {
					flex-basis: 40%;
				}
				@media only screen and (min-width: 1440px) {
					flex-basis: 45%;
				}
			`}
		>
			<section
				css={css`
					@media only screen and (min-width: 1200px) {
						position: fixed;
						width: calc((100vw - 20rem) * 40 / 100);
					}
					@media only screen and (min-width: 1440px) {
						width: calc((100vw - 40rem) * 45 / 100);
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
