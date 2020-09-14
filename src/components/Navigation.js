/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Navigation = ({sections}) => {
	return (
		<section
			css={css`
				display: none;
				@media only screen and (min-width: 1200px) {
					margin-bottom: 4rem;
				}
			`}
		>
			<ul>
				{sections.map((section, index) => (
					<li
						key={index}
						css={css`
							margin-bottom: 1rem;
						`}
					>
						<a
							href={"#" + section}
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
							0{index}
							<span></span>
							{section}
						</a>
					</li>
				))}
			</ul>
		</section>
	);
};

export default Navigation;
