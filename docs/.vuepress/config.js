// Author: Shawn Jin



module.exports = {
	title: '振祥的博客',
	description: 'Shawn Jin\'s blog',
	head: [ // the tags in html head
		['link', { rel: 'icon', herf: '/dual_screen.jpg'}], // add a icon
	],
	base: '/',		// some setting about github
	markdown: {
		lineNumbers: true
	},
	locales: {
		'/': {
			lang: 'en-US',
			title: 'Shawn Jin\'s blog',
			description: ''
		},
		'/zh/': {
			lang: 'zh-CN',
			title: '振祥的博客',
			description: '一根眼高手低的废柴、不定期更新'
		}
	},
	themeConfig: {
		locales: {
			'/': {
				nav: [
					{ text: 'Thoughts', link : '/thoughts/' },

					{ text: 'Algorithm', link: '/algorithm'},

					{ text: 'About Me', link : '/aboutme/' }
				],
				sidebar: 'auto',
				sidebarDepth: 2,
			},

			'/zh/': {
				// 多语言下拉菜单的标题
				selectText: '选择语言',
				// 该语言在下拉菜单中的标签
				lable: '简体中文',
				// Service Worker 的配置
				serviceWorker: {
					updatePopup: {
						message: "发现新内容可用.",
						buttonText: "刷新"
					}
				},
				nav: [
					{text: '算法', link: '/zh/algorithm' },

					{text: '思考', link: '/zh/thoughts' },

					{text: '关于我', link: '/zh/aboutme'}
				],
				sidebar: 'auto'
			}
		}
	}
};
