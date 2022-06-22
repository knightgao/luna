import Layout from './Layout.vue';
import DefaultTheme from 'vitepress/theme';
import type {EnhanceAppContext} from "vitepress/dist/client"



export default {
    ...DefaultTheme,
    Layout: Layout,
    // this is a Vue 3 functional component

    enhanceApp({app, router, siteData}: EnhanceAppContext) {
        // app is the Vue 3 app instance from `createApp()`.
        // router is VitePress' custom router. `siteData` is
        // a `ref` of current site-level metadata.
    }
}
