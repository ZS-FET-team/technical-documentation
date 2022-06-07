const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    lang: 'zh-CN',
    title: '前端技术团队',
    description: '前端工作规范技术文档',
    head: [['link', { rel: 'icon', href: '/logo.png' }]],
    base: "/ZS-FET-team/",
    theme: defaultTheme({
        home: "/",
        logo: '/logo.png', // 导航栏logo
        displayAllHeaders: true,// 显示所有页面的标题链接
        editLink: false, //关闭在线编辑链接
        lastUpdatedText:"更新时间",
        contributorsText:"贡献者",
        // 页面搜索
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated', // 最后更新时间
        repo: 'https://github.com/ZS-FET-team', //导航栏最后的链接
        sidebarDepth: "2",
        // 导航栏
        navbar: [
            // { text: '主页', link: '/' },
            // { text: '代码注释', link: '/annotation/' },
        ],
        // 侧边栏
        sidebar: [
            {
                text: '代码注释规范',
                link: '/annotation/',
                children: [
                    // SidebarItem
                    {
                        text: '代码',
                        link: 'README.md',
                        children: [],
                    },
                    // 字符串 - 页面文件路径
                ],
            },

        ]
    }),
    plugins: [
        searchPlugin({
            getExtraFields: (page) => page.frontmatter.tags ?? [],// 允许搜索 Frontmatter 中的 `tags`
            isSearchable: (page) => page.path !== '/', // 排除首页
            maxSuggestions: '5',
            locales: {
                '/': {
                    placeholder: '搜索文档',
                },

            },
        }),
    ],
}

