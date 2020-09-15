const data = {
	name: "Divyansh Kaushik",
	about: [
		"I'm a freelance web developer based out of Austin, TX.",
		"I enjoy developing applications from the ground up and am passionate about writing clear, robust code. I love solving algorithms, debugging, and learning new technologies.",
		"I mostly do front-end development, and I'm a React.js nerd. Feel free to have a look at my portfolio and don’t hesitate to contact me if you think I can be of service to you. Thanks for stopping by!"
	],
	sections: ["skills", "projects"],
	skills: [
		{ Languages: ["JavaScript", "Python", "Swift", "HTML/CSS"] },
		{ Frameworks: ["React", "Gatsby", "Express", "Node.js"] },
		{ Databases: ["GraphQL", "MySQL/PostgreSQL", "SQLite", "MongoDB"] },
		{
			"Dev Tools": [
				"AWS EC2 / DigitalOcean",
				"Github / GitLab",
				"Postman / Insomnia",
				"VS Code / Sketch",
			],
		},
	],
	projects: [
		{
			title: "Clothing Dojo",
			github:
				"https://github.com/kaushikdivyansh/ClothingDojo-ECommere-Website",
			tech: "HTML, CSS, Django, SQLite, Bootstrap, Stripe API",
			description:
				"An E-commerce web app with login, register and checkout functionality designed to sell Coding Dojo merchandise. Created using Django framework due to its Model-Template-View architecture which led to a faster and scalable application development.",
		},
		{
			title: "FConnect",
			github: "https://github.com/kaushikdivyansh/FConnect",
			tech: "HTML, CSS, Swift, Django, SQLite, Bootstrap",
			description:
				"Web and mobile app, developed for a Non-Profit Organization, that is committed to supporting college- bound foster youths. Leveraged Bootstrap for its responsive structures, styles, and fewer cross browser bugs.",
		},
		{
			title: "Personal Website V1",
			external: "https://dk-personal-website-v1.netlify.app",
			github: "https://github.com/kaushikdivyansh/Portfolio-v1",
			tech: "HTML, CSS, JavaScript, Netlify",
			description:
				"My first portfolio website I designed and built in 2019. I learned quite a bit about HTML, CSS, and Google Analytics. Designed and developed with a conscious effort to avoid using any superfluous frameworks like Bootstrap. Since then, I think my web development and design skills have improved immensely. Deployed on Netlify.",
		},
	],
};

export default data