import { Global, css} from "@emotion/react";

const Layout = ({ children }) => {
	return (
		<>
			<Global
				styles={css`
					html {
						-webkit-box-sizing: border-box;
						box-sizing: border-box;
					}

					/* Box sizing rules */
					*,
					*::before,
					*::after {
						-webkit-box-sizing: border-box;
						box-sizing: border-box;
					}

					/* Remove list styles on ul, ol elements with a class attribute */
					ul[class],
					ol[class],
					ul,
					ol {
						list-style: none;
						padding: 0;
					}

					/* Remove default margin */
					body,
					h1,
					h2,
					h3,
					h4,
					p,
					ul[class],
					ol[class],
					li,
					figure,
					figcaption,
					blockquote,
					dl,
					dd {
						margin: 0;
					}

					body {
						font-family: system-ui, -apple-system, BlinkMacSystemFont,
							"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans",
							"Droid Sans", "Helvetica Neue", sans-serif;
						text-rendering: optimizeLegibility;
						-webkit-font-smoothing: antialiased;
						-moz-osx-font-smoothing: grayscale;
						line-height: 1.5;
						font-size: 16px;
						background-color: hsla(105, 0%, 8%, 1);
						color: hsla(308, 5%, 95%, 1);
					}
				`}
			/>
			<main
				css={css`
					margin: 2rem;

					@media only screen and (min-width: 1200px) {
						margin: 3rem 10rem;
						display: flex;
					}

					@media only screen and (min-width: 1440px) {
						margin: 4rem 20rem;
					}
				`}
			>
				{children}
			</main>
		</>
	);
};

export default Layout;
