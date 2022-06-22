import {defineConfigWithTheme} from 'vitepress'

// const modules = import.meta.glob('./*.json')

export default defineConfigWithTheme({
    lang: 'en-US',
    title: '@luna/ui',
    description: 'Vite & Vue powered static site generator.',
    base: '/',
    themeConfig: {
        socialLinks: [
            {icon: 'languages', link: '/translations/'},
            {icon: 'github', link: 'https://github.com/vuejs/'},
        ],
        footer: {
            license: {
                text: 'MIT License',
                link: 'https://opensource.org/licenses/MIT'
            },
            copyright: `Copyright © 2014-${new Date().getFullYear()} Kngiht Gao`
        }
    },

    vite: {
        define: {
            __VUE_OPTIONS_API__: false
        },
        server: {
            host: true,
            fs: {
                // for when developing with locally linked theme
                allow: ['../..']
            }
        },
        build: {
            minify: 'terser',
            chunkSizeWarningLimit: Infinity
        },
        json: {
            stringify: true
        }
    },
    vue: {
        reactivityTransform: true
    }
})
