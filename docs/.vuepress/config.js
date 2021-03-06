const { defaultTheme } = require("@vuepress/theme-default");
const { searchPlugin } = require("@vuepress/plugin-search");
const { tocPlugin } = require("@vuepress/plugin-toc");
const {
  activeHeaderLinksPlugin,
} = require("@vuepress/plugin-active-header-links");

module.exports = {
  lang: "zh-CN",
  title: "前端技术文档",
  description: "前端工作规范技术文档",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  base: "/ZS-FET-team/",
  theme: defaultTheme({
    home: "/",
    logo: "/logo.png", // 导航栏logo
    displayAllHeaders: true, // 显示所有页面的标题链接
    editLink: false, //关闭在线编辑链接
    lastUpdatedText: "更新时间",
    contributorsText: "贡献者",
    // 页面搜索
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated", // 最后更新时间
    repo: "https://github.com/ZS-FET-team", //导航栏最后的链接
    sidebarDepth: "2",
    // 导航栏
    navbar: [
      { text: "主页", link: "/" },
      { text: "前端", link: "/statute/README.md" },
    ],
    // 侧边栏
    sidebar: [
      // SidebarItem
      {
        text: "前端技术文档",
        link: "/statute/README.md",
        children: [
          // SidebarItem
          // {
          //   text: 'github',
          //   link: 'https://github.com',
          //   children: [],
          // },
          // 字符串 - 页面文件路径
          "/statute/README.md",
          "/naming/README.md",
          "/annotation/README.md",
          "/git/README.md",
          "/picture/README.md",
          "/html/README.md",
          "/css/README.md",
          "/JavaScript/README.md",
          "/vue/README.md",
          "/tool/README.md",
        ],
      },
      // 字符串 - 页面文件路径
      // '/annotation/README.md',
    ],
  }),
  plugins: [
    searchPlugin({
      getExtraFields: (page) => page.frontmatter.tags ?? [], // 允许搜索 Frontmatter 中的 `tags`
      isSearchable: (page) => page.path !== "/", // 排除首页
      maxSuggestions: "5",
      locales: {
        "/": {
          placeholder: "搜索文档",
        },
      },
    }),
    tocPlugin({
      // 配置项
    }),
    activeHeaderLinksPlugin({
      // 配置项
    }),
  ],
};
