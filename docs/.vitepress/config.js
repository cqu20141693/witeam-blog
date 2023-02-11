module.exports = {
    base: '/',
    lang: 'en-US',
    title: 'VitePress',
    description: 'Just playing around.',
    // 网页头部配置，引入需要图标，css，js
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: '/images/logo.png',
            },
        ],
    ],
    // 主题
    themeConfig: {
        siteTitle: "Wcc Blog",
        logo: "/images/logo.png",
        // 导航栏
        nav: [
            {
                text: "golang", items: [
                    {text: "简介", link: "/golang/introduce"},
                    {text: "环境", link: "/golang/env"},
                ]
            },
            {
                text: "java",
                items: [
                    {
                        items: [
                            {text: '基础', link: "/java/basic"},
                            {text: '集合', link: "/java/collection"},
                            {text: '并发', link: "/java/concurrency"},
                            {text: 'jvm', link: "/java/jvm"},
                        ]
                    },
                    {
                        items: [
                            {text: 'Netty', link: "/java/netty"},
                            {text: 'Mybatis', link: "/java/mybatis"},
                            {text: 'Spring', link: "/java/spring"},
                            {text: 'Spring Cloud', link: "/java/spring-cloud"},
                        ],
                    }
                ]},
            {
                text: 'iot', items: [
                    {text: '边缘计算', link: '/iot/edge'},
                    {text: 'iot云', link: '/iot/iot'},
                    {text: '数据处理', link: '/iot/data'},
                ]
            },
            {
                text: 'vue',
                items: [
                    {text: "vue简介",link: "/vue/vue简介"}
                ]
            }
        ],
        // 社交
        socialLinks:[
            { icon: "github", link: "https://github.com/cqu20141693" },
        ],
        //侧边栏
        sidebar: {
            "/golang": [
                {
                    text: "golang 教程",
                    items: [
                        {text: "深入理解goroutine", link: "/golang/深入理解goroutine",},
                        {text: "Gin web开发", link: "/golang/go-gin"},
                        { text: "go micro微服务开发", link: "/golang/go-micro" },
                    ],
                },
            ],
            "vue":[
                {
                    text: "vue教程",
                    items: [
                        {
                            text: "vitepress搭建个人博客",
                            link: "/vue/vitepress搭建个人博客",
                        },
                    ],
                }
            ]
        }

    },
}