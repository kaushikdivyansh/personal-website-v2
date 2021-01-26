import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Para = styled.p`
	color: hsla(241, 1%, 58%, 1);
	font-size: 1rem;
	line-height: 2;
`;

const About = ({ name, about }) => {
	return (
		<section
			css={css`
				margin-bottom: 2rem;

				@media only screen and (min-width: 1200px) {
					margin-bottom: 4rem;
				}
			`}
		>
			<h1
				css={css`
					font-size: 4rem;
					margin-bottom: 1rem;
					font-weight: 600;
					line-height: 1;
					color: hsla(99, 100%, 100%, 1);

					@media only screen and (min-width: 1200px) {
						font-size: 4rem;
						margin-bottom: 2rem;
					}
				`}
			>
				Hello, I&apos;m {name}.
			</h1>

			{about.map((para, index) => (
				<Para key={index}>{para}</Para>
			))}
		</section>
	);
};

export default About;
