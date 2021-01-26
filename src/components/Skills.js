/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Skills = ({ skills }) => {
	return (
		<div>
			<h2
				css={css`
					text-transform: uppercase;
					letter-spacing: 0.1em;
					margin-bottom: 0.5rem;
					font-size: 1.25rem;
					@media only screen and (min-width: 1200px) {
						display: none;
					}
				`}
			>
				Skills
			</h2>
			<section
				id="skills"
				css={css`
					display: flex;
					flex-flow: column nowrap;
					margin-bottom: 2rem;

					@media only screen and (min-width: 768px) {
						flex-flow: row wrap;
					}

					@media only screen and (min-width: 992px) and (orientation: portrait) {
						flex-flow: row nowrap;

						&:last-child {
							margin-right: 0rem;
						}
					}

					@media only screen and (min-width: 1200px) {
						padding: 0 2rem;
						flex-flow: row wrap;
						pointer-events: none;
						margin-bottom: 4rem;

						& > div {
							pointer-events: auto;
							transition: 0.15s all ease-out;
						}

						&:hover > div,
						&:focus-within > div {
							opacity: 0.4;
						}

						&:hover > :hover,
						&:focus-within > :hover {
							transform: scale(1.1);
							opacity: 1;
						}
					}
				`}
			>
				{skills.map((skillType, index) => (
					<div
						key={index}
						css={css`
							background-color: hsla(242, 3%, 13%, 1);
							margin-bottom: 0.5rem;
							padding: 2rem;

							@media only screen and (min-width: 768px) {
								padding: 2rem;
								flex-basis: calc(50% - 0.25rem);

								&:nth-of-type(odd) {
									margin-right: 0.5rem;
									margin-bottom: 0.5rem;
								}

								&:nth-of-type(even) {
									margin-bottom: 0.5rem;
								}
							}

							@media only screen and (min-width: 992px) and (orientation: portrait) {
								margin-right: .5rem;
							}
						`}
					>
						<h3
							css={css`
								text-transform: uppercase;
								letter-spacing: 0.1em;
							`}
						>
							{Object.keys(skillType)}
						</h3>
						<ul
							css={css`
								& > li {
									margin-bottom: 0.5rem;
									letter-spacing: 0.1rem;

									&:first-of-type {
										margin-top: 1rem;
									}

									&:last-of-type {
										margin-bottom: 0rem;
									}
								}

								@media only screen and (min-width: 1200px) {
									& > li {
										margin-bottom: 0.5rem;
										letter-spacing: 0.1rem;

										&:first-of-type {
											margin-top: 1.5rem;
										}

										&:last-of-type {
											margin-bottom: 1.5rem;
										}
									}
								}

								@media only screen and (min-width: 1440px) {
									& > li {
										margin-bottom: 0.5rem;
										letter-spacing: 0.1rem;

										&:first-of-type {
											margin-top: 2rem;
										}

										&:last-of-type {
											margin-bottom: 2rem;
										}
									}
								}
							`}
						>
							{skillType[Object.keys(skillType)].map((skill, index) => (
								<li key={index}>{skill}</li>
							))}
						</ul>
					</div>
				))}
			</section>
		</div>
	);
};

export default Skills;
