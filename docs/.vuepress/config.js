// Author: Shawn Jin



module.exports = {
	title: '振祥的博客',
	description: 'Shawn Jin\'s blog',
	head: [ // the tags in html head
		['link', { rel: 'icon', herf: '/images/dual_screen.jpg'}], // add a icon
	],
	base: '/',		// some setting about github
	markdown: {
		lineNumbers: true
	},

	locales: {
		'/': {
			lang: 'en-US',
			title: 'Shawn Jin\'s blog',
			description: 'I am a slow walker, but I never walk back.'
		},
		'/zh/': {
			lang: 'zh-CN',
			title: '振祥的博客',
			description: '我走得很慢，但我从不后退。'
		}
	},
//Some people die at 25 and aren't buried until 75.
	themeConfig: {
		locales: {
			/**
			This is English version partion
			*/
			'/': {
				selectText: 'Select Language',
				// 该语言在下拉菜单中的标签
				label: 'English',
				// Service Worker 的配置
				serviceWorker: {
					updatePopup: true,
					updatePopup: {
						message: "Find something new!",
						buttonText: "refresh"
					}
				},
				nav: [
					{ text: 'Notes', link: '/studyingnotes/' },

					{ text: 'Linux', link: '/linux/' },

					{ text: 'Thoughts', link : '/thoughts/' },

					// { text: 'Algorithm', link: '/algorithm/'},
					{
						text: 'Algorithm',
						items:
						[
							{ text: 'Sorting', link: '/algorithm/sorting/' },

							{ text: 'Searching', link: '/algorithm/searching/' },

							{ text: 'Data Structure', link: '/algorithm/datastructure/'},

							{ text: 'Other', link: '/algorithm/other/'}
						]
					},

					{ text: 'Data Science', link: '/datascience/'},

					{ text: 'About Me', link : '/aboutme/' },

					{ text: 'Github', link: 'https://github.com/jinchenxiangdan' }

				],
				displayAllHeaders: true,
				sidebar: {
					'/studyingnotes/': getNotesSideBar('Notes', 'Introduction'),
					'/linux/': getLinuxSidebar('Linux', 'Introduction'),
					'/thoughts/': getThoughtsSidebar('Thoughts', 'Introduction'),
					'/algorithm/sorting/': getSortingSidebar('Sorting', 'Introduction'),
					'/algorithm/searching/': getSearchingSidebar('Searching', 'Intro'),
					'/algorithm/datastructure/': getDataStructureSidebar('Data Structure', "Intro")
				},
				lastUpdated: 'Last Updated'
			},
			/**
			This is Simply Chinese version
			*/
			'/zh/': {
				// 多语言下拉菜单的标题
				selectText: '选择语言',
				// 该语言在下拉菜单中的标签
				label: '简体中文',
				// Service Worker 的配置
				serviceWorker: {
					updatePopup: true,
					updatePopup: {
						message: "发现新内容可用.",
						buttonText: "刷新"
					}
				},
				nav: [

					{ text: '学习笔记', link: '/zh/studyingnotes/' },

					{ text: 'Linux', link: '/zh/linux/' },

					{
						text: '算法',
						items:
						[
								{ text: '排序算法', link: '/zh/algorithm/sorting/' },

								{ text: '查找算法', link: '/zh/algorithm/searching/' },

								{ text: '数据结构', link: '/zh/algorithm/datastructure/'},

								{ text: '其他', link: '/zh/algorithm/other/' }
						]
					},

					{ text: '思考', link: '/zh/thoughts/' },

					{ text: '关于我', link: '/zh/aboutme/' },

					{ text: 'Github', link: 'https://github.com/jinchenxiangdan' }
				],
				displayAllHeaders: true,
				sidebar: {
					'/zh/studyingnotes/': getNotesSideBar('学习笔记', '目的'),
					'/zh/linux/': getLinuxSidebar('Linux', 'Introduction'),
					'/zh/thoughts/': getThoughtsSidebar('想法', '介绍'),
					'/zh/algorithm/sorting/': getSortingSidebar('排序', '介绍'),
					'/zh/algorithm/searching/': getSearchingSidebar('查找', '介绍'),
					'/zh/algorithm/datastructure/': getDataStructureSidebar('数据结构', "介绍")
				},
				lastUpdated: '最近更新时间'

			}
		}
	}
};


/**
 * These below are sidebar content
 */

function getNotesSideBar(titleA, introductionA) {
	return [
		{
			title: titleA,
			collapsable: false,
			sidebarDepth: 1,
			children: [
				['', introductionA]
			]
		},

		{
			title: "Git",
			collapsable: false,
			sidebarDepth: 1,
			children: [
				'git-push-deny'
			]
		}

	]


}

function getThoughtsSidebar(titleA, introductionA) {
	return [
		{
			title: titleA,
			collapsable: false,
			sidebarDepth: 2,
			children: [
				['', introductionA]
			]
		}
	]

}


function getSortingSidebar(titleA, introductionA) {
	return [
		{
			title: titleA,
			collapsable: false,
			sidebarDepth: 2,
			children: [
				['', introductionA]

			]
		},

		{
			title: 'Analyzation',
			children: [

			]
		},

		{
			title: 'Problems',
			children:[
				'2-sorted-array-median'
			]
		}
	]
}

function getSearchingSidebar(titleA, introductionA) {
	return [
		{
			title: titleA,
			collapsable: false,
			sidebarDepth: 2,
			children: [
				['', introductionA]
			]
		}
	]
}

function getDataStructureSidebar(titleA, introductionA) {
	return [
		{
			title: titleA,
			collapsable: false,
			sidebarDepth: 2,
			children: [
				['', introductionA]
			]
		}
	]
}

function getLinuxSidebar(titleA, introductionA) {
	return [
		{
			title: titleA,
			collapsable: false,
			sidebarDepth: 2,
			children: [
				['', introductionA],
				'graphics-library',
				'pi-driver',
				'syscalls-and-ipc'
			]
		}
	]
}
