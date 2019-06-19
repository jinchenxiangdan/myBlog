// Author: Shawn Jin



module.exports = {
	title: '振祥的博客',
	description: 'my own blog',
	head: [ // the tags in html head
		['link', { rel: 'icon', herf: '/dual_screen.jpg'}], // add a icon
	],
	base: '/',		// some setting about github
	markdown: {
		lineNumbers: true
	},
	themeConfig: {
		nav: [
			{ text: 'thoughts', link : '/thoughts/' },

			{ text: 'algorithm', link: '/algorithm'},

			{ text: 'about me', link : '/aboutme/' }
		],
		sidebar: 'auto',
		sidebarDepth: 2,
	}
};
