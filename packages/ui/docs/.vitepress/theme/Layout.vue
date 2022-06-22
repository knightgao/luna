<script setup>
import DefaultTheme from 'vitepress/theme'

const {Layout} = DefaultTheme
</script>

<template>
  <Layout>
    <template v-slot:aside-outline-before>
      <div>此处放预览</div>
    </template>
  </Layout>
</template>
