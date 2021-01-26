import { css } from "@emotion/react";

const LinkedIcon = ({link, children}) => (
	<a
		href={link}
		rel="noopener noreferrer"
		target="_blank"
		css={css`
			color: inherit;
			text-decoration: none;
			display: flex;
			align-items: center;

			& > svg {
				margin-right: 0.5rem;

				&:first-of-type {
					margin-left: 0;
				}
			}
		`}
	>
    {children}
	</a>
);

export default LinkedIcon;