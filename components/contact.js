import { css } from "@emotion/react";
import LinkedIcon from "./linkedIcon";
import Github from "./github";
import Linkedin from "./linkedin";
import Mail from "./mail";

const Contact = () => {
	return (
		<section
			css={css`
				display: flex;
				margin-bottom: 2rem;
				& > a {
					margin-right: 1rem;
				}

				@media only screen and (min-width: 1200px) {
					& > a {
						margin-right: 2rem;

						a:last-of-type {
							margin-right: 0;
						}
					}
				}
			`}
		>
			<LinkedIcon link="https://www.github.com/kaushikdivyansh">
				<Github />
				Github
			</LinkedIcon>
			<LinkedIcon link="https://www.linkedin.com/in/kaushikdivyansh">
				<Linkedin />
				Linkedin
			</LinkedIcon>
			<LinkedIcon link="mailto:kaushik.divyansh@icloud.com">
				<Mail />
				Mail
			</LinkedIcon>
		</section>
	);
};

export default Contact;
