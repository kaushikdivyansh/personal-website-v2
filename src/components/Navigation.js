/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";

const Navigation = ({ sections }) => {
	const [skillActive, setSkillActive] = useState(true);
	const [projectActive, setProjectActive] = useState(false);

	return (
		<section
			css={css`
				display: none;

				@media only screen and (min-width: 1200px) {
					display: block;
					margin-bottom: 4rem;
				}
			`}
		>
			<ul>
				{/* {sections.map((section, index) => ( */}
				<li
					css={css`
						margin-bottom: 1rem;

						& > a.active {
							color: hsla(99, 100%, 100%, 1);
						}

						& > a.active > span {
							width: 4rem;
							height: 0.1rem;
						}
					`}
				>
					<a
						href="#skills"
						className={skillActive ? "active" : null}
						onClick={() => {
							setSkillActive(true);
							setProjectActive(false);
						}}
						css={css`
							color: hsla(241, 1%, 58%, 1);
							text-decoration: none;
							text-transform: uppercase;
							font-size: 0.75rem;
							font-weight: bold;
							letter-spacing: 0.1rem;
							display: flex;
							align-items: center;
							transition: 0.1s all ease-out;

							& > span {
								height: 0.05rem;
								width: 2rem;
								background: hsla(99, 100%, 100%, 1);
								margin: 0 1rem;
								transition: 0.1s all ease-out;
								display: inline-block;
							}

							&:hover {
								color: hsla(99, 100%, 100%, 1);

								& > span {
									width: 4rem;
									height: 0.1rem;
								}
							}
						`}
					>
						00
						<span></span>
						Skills
					</a>
				</li>
				<li
					css={css`
						margin-bottom: 1rem;

						& > a.active {
							color: hsla(99, 100%, 100%, 1);
						}

						& > a.active > span {
							width: 4rem;
							height: 0.1rem;
						}
					`}
				>
					<a
						href="#projects"
						className={projectActive ? "active" : null}
						onClick={() => {
							setProjectActive(true);
							setSkillActive(false);
							
						}}
						css={css`
							color: hsla(241, 1%, 58%, 1);
							text-decoration: none;
							text-transform: uppercase;
							font-size: 0.75rem;
							font-weight: bold;
							letter-spacing: 0.1rem;
							display: flex;
							align-items: center;
							transition: 0.1s all ease-out;

							& > span {
								height: 0.05rem;
								width: 2rem;
								background: hsla(99, 100%, 100%, 1);
								margin: 0 1rem;
								transition: 0.1s all ease-out;
								display: inline-block;
							}

							&:hover {
								color: hsla(99, 100%, 100%, 1);

								& > span {
									width: 4rem;
									height: 0.1rem;
								}
							}
						`}
					>
						01
						<span></span>
						Projects
					</a>
				</li>
				{/* ))} */}
			</ul>
		</section>
	);
};

export default Navigation;
