// // Author: Shawn Jin
// // This is the structure code of myblog

const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "Shawn's blog",
  description: '',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}








// module.exports = {
// 	plugins: [

// 		[
// 			'@vuepress/register-components',
// 			{
// 				componentsDir: '.components'
// 			}
// 		],
// 		[
// 			"md-enhance",
// 			{
// 				tex: true,
// 				align: true,
// 			},
// 		],
// 		// [
// 		//       'vuepress-plugin-comment',
// 		//       {
// 		//         choosen: 'waline',
// 		//         // options选项中的所有参数，会传给Valine的配置
// 		//         options: {
// 		//           el: '#waline-vuepress-comment',
// 		//           appId: 'Your own appId',
// 		//           appKey: 'Your own appKey'
// 		//         }
// 		//       }
// 		// ],
// 	],
// 	title: '振祥的博客',
// 	description: 'Shawn Jin\'s blog',
// 	head: [ // the tags in html head
// 		['link', { rel: 'icon', herf: '/images/dual_screen.jpg'}], // add a icon
// 	],
// 	base: '/',		// some setting about github
// 	markdown: {
// 		lineNumbers: true
// 	},

// 	locales: {
// 		'/': {
// 			lang: 'en-US',
// 			title: 'aBloggey',
// 			description: 'I am not a creator of knowledge, I am just a porter of knowledge.'
// 		},
// 		'/zh/': {
// 			lang: 'zh-CN',
// 			title: '振祥的博客',
// 			description: '我不是知识的创造者，我只是知识的搬运工。'
// 		}
// 	},

// 	themeConfig: {
// 		// close last/previse essay link
// 		nextLinks: false,
// 		prevLinks: false,
// 		// logo of
// 		logo: '/images/logo2-removebg.png',
// 		smoothScroll: true,

// 		locales: {
// 			/**
// 			English version partion
// 			*/
// 			'/': {
// 				selectText: 'Select Language',
// 				// 该语言在下拉菜单中的标签
// 				label: 'English',
// 				// Service Worker 的配置
// 				serviceWorker: {
// 					updatePopup: true,
// 					updatePopup: {
// 						message: "Find something new!",
// 						buttonText: "refresh"
// 					}
// 				},
// 				nav: [
// 					{ text: 'Notes', link: '/studyingnotes/' },

// 					// { text: 'Linux', link: '/linux/' },

// 					{ text: 'Thoughts', link : '/thoughts/' },

// 					{
// 						text: 'Algorithm',
// 						items:
// 						[
// 							{ text: 'Sorting', link: '/algorithm/sorting/' },

// 							{ text: 'Searching', link: '/algorithm/searching/' },

// 							{ text: 'Data Structure', link: '/algorithm/datastructure/'},

// 							{ text: 'Other', link: '/algorithm/other/'}
// 						]
// 					},

// 					{ text: 'Data Science', link: '/datascience/'},

// 					{ text: 'About Me', link : '/aboutme/' },

// 					{ text: 'Github', link: 'https://github.com/jinchenxiangdan' }

// 				],
// 				displayAllHeaders: true,
// 				sidebar: {
// 					'/studyingnotes/': getNotesSideBar('Notes', 'Introduction'),
// 					// '/linux/': getLinuxSidebar('Linux Kernel', 'Introduction',
// 					// 							'General', 'Linux General Problems'),
// 					'/thoughts/': getThoughtsSidebar('Thoughts', 'Introduction'),
// 					'/algorithm/sorting/': getSortingSidebar('Sorting', 'Introduction'),
// 					'/algorithm/searching/': getSearchingSidebar('Searching', 'Intro'),
// 					'/algorithm/datastructure/': getDataStructureSidebar('Data Structure', "Intro"),
// 					'/algorithm/other/': getOtherAlgorithmSidebar(),
// 					'/datascience/': getDataScienceSiderbar('Data Science', 'Introduction',
// 																									'MachineLearning', 'IntroductionDL',
// 																									'Database', 'Introduction')
// 				},
// 				lastUpdated: 'Last Updated'

// 			},
// 			/**
// 			Simply Chinese version
// 			*/
// 			'/zh/': {
// 				// 多语言下拉菜单的标题
// 				selectText: '选择语言',
// 				// 该语言在下拉菜单中的标签
// 				label: '简体中文',
// 				// Service Worker 的配置
// 				serviceWorker: {
// 					updatePopup: true,
// 					updatePopup: {
// 						message: "发现新内容可用.",
// 						buttonText: "刷新"
// 					}
// 				},
// 				nav: [

// 					{ text: '学习笔记', link: '/zh/studyingnotes/' },

// 					// { text: 'Linux', link: '/zh/linux/' },

// 					{
// 						text: '算法',
// 						items:
// 						[
// 								{ text: '排序算法', link: '/zh/algorithm/sorting/' },

// 								{ text: '查找算法', link: '/zh/algorithm/searching/' },

// 								{ text: '数据结构', link: '/zh/algorithm/datastructure/'},

// 								{ text: '其他', link: '/zh/algorithm/other/' }
// 						]
// 					},

// 					{ text: '思考', link: '/zh/thoughts/' },

// 					{ text: '关于我', link: '/zh/aboutme/' },

// 					{ text: 'Github', link: 'https://github.com/jinchenxiangdan' }
// 				],
// 				displayAllHeaders: true,
// 				sidebar: {
// 					'/zh/studyingnotes/': getNotesSideBar('学习笔记', '目的'),
// 					// '/zh/linux/': getLinuxSidebar('Linux', 'Introduction'),
// 					'/zh/thoughts/': getThoughtsSidebar('想法', '介绍'),
// 					'/zh/algorithm/sorting/': getSortingSidebar('排序', '介绍'),
// 					'/zh/algorithm/searching/': getSearchingSidebar('查找', '介绍'),
// 					'/zh/algorithm/datastructure/': getDataStructureSidebar('数据结构', "介绍"),
// 					'zh/datascience/': getDataScienceSiderbar('数据科学', 'Introduction',
// 																									'机器学习', 'IntroductionDL',
// 																									'数据库', 'Introduction')
// 				},
// 				lastUpdated: '最近更新时间',
// 				// close last/previse essay link
// 				nextLinks: false,
// 				prevLinks: false,
// 				// logo of
// 				logo: './public/images/logo.png',
// 				smoothScroll: true

// 			}
// 		}
// 	}
// };


// /************************************************************************************************************
//  * These below are sidebar content
//  ***********************************************************************************************************/

// function getNotesSideBar(titleA, introductionA) {
// 	return [
// 		{
// 			title: titleA,
// 			collapsable: true,
// 			sidebarDepth: 1,
// 			children: [
// 				['',introductionA]
// 			]
// 		},
// 		// Github notes
// 		{
// 			title: "Git",
// 			collapsable: true,
// 			sidebarDepth: 1,
// 			children: [
// 				'git-push-deny',
// 				'refreash-git-ignore',
// 				'ssh-add-failed'
// 			]
// 		},
// 		// Python notes
// 		{
// 			title: "Python",
// 			collapsable: true,
// 			sidebarDepth: 1,
// 			children: [
// 				'python-modify-range-variable-in-for-loop',
// 				'python_import_files'
// 			]
// 		},
// 		// R notes
// 		{
// 			title: "R",
// 			collapsable: true,
// 			sidebarDepth: 1,
// 			children: [
// 				// { title: title }
// 				'r-basic'
// 			]
// 		},
// 		// Vuepress notes
// 		{
// 			title: "Vuepress",
// 			collapsable: true,
// 			sidebarDepth: 1,
// 			children: [
// 				'windows-configure-vuepress',
// 				'npm-error-permission'
// 			]
// 		},
// 		// linux
// 		{
// 			title: "Linux",
// 			collapsable: true,
// 			sidebarDepth: 1,
// 			children: [
// 				'apt-lock-error',
// 				'ojs-setup',
// 				'ssh-keep-thread'
// 			]
// 		},
// 		// Reading notes
// 		{
// 			title: "Reading Notes",
// 			collapsable: true,
// 			sidebarDepth: 1,
// 			children: [
// 				// 'data-mining',
// 				'interaction-design',
// 				'organized-system'
// 			]
// 		}
// 	]
// }


// function getThoughtsSidebar(titleA, introductionA) {
// 	return [
// 		{
// 			title: titleA,
// 			collapsable: true,
// 			sidebarDepth: 2,
// 			children: [
// 				['', introductionA]

// 			]
// 		}
// 	]

// }


// function getSortingSidebar(titleA, introductionA) {
// 	return [
// 		{
// 			title: titleA,
// 			collapsable: true,
// 			sidebarDepth: 2,
// 			children: [
// 				['', introductionA]

// 			]
// 		},

// 		// {
// 		// 	title: 'Analyzation',
// 		// 	children: [
// 		// 	]
// 		// },

// 		{
// 			title: 'Problems',
// 			children:[
// 				'2-sorted-array-median'
// 			]
// 		}
// 	]
// }


// function getSearchingSidebar(titleA, introductionA) {
// 	return [
// 		{
// 			title: titleA,
// 			collapsable: true,
// 			sidebarDepth: 2,
// 			children: [
// 				['', introductionA]
// 			]
// 		}
// 	]
// }


// function getDataStructureSidebar(titleA, introductionA) {
// 	return [
// 		{
// 			title: titleA,
// 			collapsable: true,
// 			sidebarDepth: 2,
// 			children: [
// 				['', introductionA]
// 			]
// 		}
// 	]
// }

// function getOtherAlgorithmSidebar() {
// 	return [
// 		{
// 			title: 'Backtrack',
// 			collapsable: true,
// 			sidebarDepth: 1,
// 			children: [
// 				'enumeration'
// 			]
// 		}

// 	]
// }


// function getDataScienceSiderbar(titleA, introductionA, titleB, introductionB, titleC, introductionC) {
// 	return [
// 		{
// 			// data science
// 			title: titleA,
// 			collapsable: true,
// 			sidebarDepth: 1,
// 			children: [
// 				['', introductionA],
// 				// 'treemap',
// 				'duplicate-file-checking',
// 				'data-mining',
// 				'distributions'

// 			]
// 		},
// 		{
// 			// Machine Learning
// 			title: titleB,
// 			collapsable: true,
// 			sidebarDepth: 1,
// 			children: [
// 				['', introductionB],
// 				'tesseract_ocr_training',
// 				'svm'
// 			]
// 		},
// 		{
// 			// Database
// 			title:titleC,
// 			collapsable: true,
// 			sidebarDepth: 1,
// 			children: [
// 				['', introductionC],
// 				'set-up-mysql-on-mac'
// 			]
// 		}
// 		// ,{
// 		// 	title: "Data Mining",
// 		// 	collapsable: true,
// 		// 	sidebarDepth: 1,
// 		// 	children: [
// 		// 		'data-mining',
// 		// 		'interaction-design'
// 		// 	]
// 		// },
// 		// {
// 		// 	title: "Data Vazulization",
// 		// 	collapsable: true,
// 		// 	sidebarDepth: 1,
// 		// 	children: [
// 		// 		// 'data-mining',
// 		// 		// 'interaction-design'
// 		// 	]
// 		// },
// 		// {
// 		// 	title: "Reading Notes",
// 		// 	collapsable: true,
// 		// 	sidebarDepth: 1,
// 		// 	children: [
// 		// 		'data-mining',
// 		// 		'interaction-design'
// 		// 	]
// 		// }
// 	]
// }
