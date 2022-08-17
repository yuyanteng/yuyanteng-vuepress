module.exports = {
    title: '前端领域 | 摸爬滚打', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: '前端进阶之路', // meta 中的描述文字，用于SEO
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/firepng.png' }],  //浏览器的标签栏的网页图标
    ],
    markdown: {
        lineNumbers: true
    },
    serviceWorker: true,
    themeConfig: {
        // logo: '/firegif.gif',
        lastUpdated: 'lastUpdate', // string | boolean
        nav: [
            { text: '我的概述', link: '/' },
            {
                text: '前端基础',
                ariaLabel: '前端基础',
                link: '/pages/webBasics/',
            },
            {
                text: 'React',
                ariaLabel: 'React',
                link: '/pages/react/redux',
                // items: [
                //     { text: '文章', link: '/pages/folder1/test1.md' },
                //     { text: '琐碎', link: '/pages/folder2/test4.md' },
                // ]
            },
            {
                text: 'Vue',
                ariaLabel: 'Vue',
                link: '/pages/vue/vueBasic',
            },
            {
                text: '前端披荆斩棘',
                ariaLabel: '前端披荆斩棘',
                link: '/pages/moreKnow/git',
            },
            // {
            //     text: '小程序',
            //     ariaLabel: '小程序',
            //     link: '/pages/webMore/common-codes.html',
            // },
            // { text: '功能演示', link: '/pages/folder1/test3.md' },
            { text: 'Github', link: 'https://github.com/yuyanteng' },
        ],
        sidebar: {
            '/pages/webBasics/':[
                {
                    title: '前端基础',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['handwriting.md', '手写代码'],
                        ['ES7-ES12-Knowledge.md', 'ES7-ES12知识点'],
                    ]
                },
            ],
            '/pages/react/':[
                {
                    title: 'React拥抱',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['redux.md', 'Redux--熟练使用']
                    ]
                },
            ],
            '/pages/vue/':[
                {
                    title: 'Vue拥抱',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 0,    // 可选的, 默认值是 1
                    children: [
                        ['vueBasic.md', 'vue--基础']
                    ]
                },
            ],
            '/pages/moreKnow/':[
                {
                    title: '必备知识',   // 必要的
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['git.md', 'git--基础使用'],
                    ]
                },
                {
                    title: '兼具知识',
                    collapsable: false, // 可选的, 默认值是 true,
                    sidebarDepth: 1,    // 可选的, 默认值是 1
                    children: [
                        ['node.md', 'node--简单使用'],
                        ['webpack.md', 'Webpack--不再恐惧'],
                    ]
                }
            ],
        }
    }
}