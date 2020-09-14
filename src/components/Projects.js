/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LinkedIcon from "./LinkedIcon";
import Github from "./icons/Github";
import External from "./icons/External";

const Projects = ({ projects }) => {
	return (
		<section
			id="projects"
			css={css`
				@media only screen and (min-width: 1200px) {
					padding: 0 2rem;
					display: flex;
					flex-flow: column wrap;
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
			<h2
				css={css`
					text-transform: uppercase;
					letter-spacing: 0.1em;
					margin-bottom: 0.5rem;
					@media only screen and (min-width: 1200px) {
						display: none;
					}
				`}
			>
				Projects
			</h2>
			{projects.map((project, index) => (
				<div
					key={index}
					css={css`
						background-color: hsla(242, 3%, 13%, 1);
						padding: 2rem;
						margin-bottom: 0.5rem;

						&:last-of-type {
							margin-bottom: 0;
						}
					`}
				>
					<div
						css={css`
							display: flex;
							justify-content: space-between;
							align-items: baseline;
							margin-bottom: 0.25rem;
						`}
					>
						<h3
							css={css`
								text-transform: uppercase;
								letter-spacing: 0.1em;
							`}
						>
							{project.title}
						</h3>
						<div
							css={css`
								display: flex;

								& > a > svg {
									margin:0
								}

								& > a:last-of-type > svg {
									margin-left: 1rem;
								}
							`}
						>
							<LinkedIcon link={project.github}>
								<Github />
							</LinkedIcon>
							{project.external ? (
								<LinkedIcon link={project.external}>
									<External />
								</LinkedIcon>
							) : null}
						</div>
					</div>
					<h5
						css={css`
							letter-spacing: 0.1em;
							font-weight: 500;
							margin-top: 0rem;
							margin-bottom: 1rem;
							color: hsla(241, 1%, 58%, 1);
						`}
					>
						Technologies Used: {project.tech}
					</h5>
					<p
						css={css`
							font-size: 1rem;
							line-height: 2;
						`}
					>
						{project.description}
					</p>
				</div>
			))}
		</section>
	);
};

export default Projects;
